---
title: Hash Breakage
description: Discovering that Hashes work best with immutability
slug: hash-breakage
date: 2012-08-14
---

I was having issues with my Minimax cache and felt the need to debug using pry. While I was
observing my cache fill up, I noticed that my Hash keys were all the same, and even had different
values. Hmmm... Puzzle!

The problem I was facing was that my keys were same-length arrays of symbols. That alone doesn't
break it, though. The trick was that the array being used to store my values was not immutable. It
was changing by design. As a result, my Hash keys were all updating.

```ruby
x = [1, 2, 3]
y = [4, 5, 6]
hash = {x => :foo, y => :bar}
=> {[1, 2, 3] => :foo, [4, 5, 6] => :bar}

y.replace([1, 2, 3])
hash
=> {[1, 2, 3] => :foo, [1, 2, 3] => :bar}
```

Fortunately, there is a simple solution. It's not the greatest, but it works just fine for simple
projects. Clone the array before using it to store a value in the hash. A more appropriate
alternative, and certainly so for the changes I intend to make with my project, is to create a
method which generates unique hash keys. This way, the developer has more complete control over how
state is translated into symbolic form.
