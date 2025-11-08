---
title: Everything Will Be Okay
description: A cautionary tale about web standards and trust
slug: everything-will-be-ok
date: 2024-06-03
---

At a higher education career event, a representative from a recruitment agency spends a few minutes
with each student participant. On a purpose-built iPad app, they methodically record personalized
information about the students—photos, personal details, and notes about qualifications. After a
long day taking information from hundreds of students, the representative returns to their hotel
room with a tablet full of data. They connect to the hotel WiFi and upload everything to the cloud.
On success, the data is automatically removed from the drive to make space for the next day's
collection.

Not long after, someone at the agency asks about the information from that day. They can't seem to
find it. They ask the representative, "Has it been uploaded yet?"

"Of course," the rep replies. "I uploaded it when I got back to the hotel."

"It's not in the system."

Concerned, the rep signs in to locate the data. But they can't. It's not there. And it's no longer
on the iPad. It's just gone!

---

This is a true story about a client I worked with. Their team was developing an in-house iPad app
for recording recruitment information out in the field. As a convenience to users, the app was
designed to automatically clear space after a successful upload to the server. The upload response
was checked before taking this step. But much to the dismay of the team, it didn't work as intended.

Why not?

After investigating the sequence of events—looking through the source and checking logs—we made an
alarming discovery.

If you've spent enough time trying to use hotel WiFi, you might have noticed that, for some hotels,
any attempt to access the internet will be unsuccessful until you've signed in through a splash
screen from the local network. Try going to Google? Nope. You must sign in first. Check your email?
Nope. You must sign in first. But once you've taken that step, you're on the internet!

But what about that "unsuccessful" part? Shouldn't the app have seen that and aborted the
upload-and-delete action? Well, here's where the shenanigans emerge. For hotels like this one, when
the network sees your request for Google, or your company's API, or your favorite NSFW site, it
skips the request and instead loads the hotel's splash screen. It appears to redirect you away from
your intended destination.

But, wait. A redirect is a 3xx response type. That's redirection, not "success" in the typical
sense. The app was checking for a 2xx success type, _right_?

Indeed, it was. Specifically, it was looking for a 200 OK response. However, while the WiFi at this
particular hotel appeared to redirect, it was actually just ignoring the given location and
rendering the splash screen instead, resolving with a response of 200 OK. Straying further from
expectations, it didn't matter what method was used for the request. In this case, it was a POST
request. The primary behavior of this gatekeeping feature was to ignore any and all unauthorized
requests and simply deliver the splash screen.

In short, the app requested uploads to the server and the hotel WiFi responded with 200 OK to each
request, which the app interpreted as a successful upload.

So, what _really_ went wrong here?

It'd be convenient to assign blame to the hotel network for using questionable HTTP practices. One
could argue that redirection might have been most appropriate, or perhaps a 405 "Method Not Allowed"
if they are only handling GET requests. But even if they responded appropriately, there are plenty
of other ways for a network request to be mishandled or distorted. There is no strict requirement
for servers and network nodes to all honor the same standards. The network is not to be trusted
outright.

The developers on this team were conscious of the need to check the response from the server. And
since this was still in the prototype phase, a 100% robust solution was not the primary objective.
To prove the concept, mistakes ought to be expected, and forgiven.

What was the mistake?

Someone _could_ argue that the automatic deletion of data after the upload was a dangerous choice.
But the danger comes not from the user flow, but from the amount of trust placed in the network
responses during the upload step. Those responses were trusted implicitly, taken at face value. But
they lied.

What could have been done instead?

The response status code to any network request is the first indicator of how it was handled. This
number codifies _generally_ what happened with the request after it left the client. It's most
useful for quickly determining what happened when a request was **not** successful (non-2xx). But
when it comes to sensitive communication, such as handling user data, it's important to verify that
the expected behavior is in **fact** what actually happened.

In the case of an API call like the one used by this app, the content type of the response is the
next indicator of behavior. Are you expecting a JSON response, but you got HTML? That's a red flag,
and likely a failure. It could mean that the request was misconfigured, perhaps omitting the
`application/json` MIME type from the headers. It could mean that the server similarly mishandled
the request. Or as demonstrated above, it could mean that the network is misbehaving. In any case,
the result of the request cannot be determined without a secondary workflow, most likely manual
intervention.

When the expected content type is received, this is a positive indicator. But it still isn't enough
to definitively conclude success. If the request was for uploading person data, and the response
contains a recipe for potato salad, something is definitely wrong. Fascinating, but wrong. A common
solution is to confirm that the response data matches a custom schema that is specific to this API.
Or better yet, use a schema that is specific to this endpoint. An example of this might look like
the following:

```json
{"status": "student-created", "record": {...}}
```

In the above example, the `status` property encodes both the domain type and the conceptual result,
assuring the client that the end result of this request was that a student record was created with
the given data. While not necessarily 100% robust, this is reasonably sufficient for most
applications.

The internet is built on a rich body of standards and recommendations. Whether we are conscious of
it as developers or as users, we are all dependent on other people's software respecting those
standards and making reasonable decisions based on those recommendations. But as we've seen, it's no
guarantee. When you're writing code that talks with an API, especially when the integrity of user
data is dependent on the response, remember to be diligent. Verify your responses, because
everything might be OK.
