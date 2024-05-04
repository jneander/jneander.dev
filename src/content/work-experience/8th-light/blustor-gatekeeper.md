---
employer: 8th-light
title: BluStor GateKeeper
description:
  I led development on an Android-based SDK and app for bluetooth communication with a
  biometrics-secured smartcard.
technologies:
  - Java
  - Android
---

## Highlights

- Prototyped an Android app to store and retrieve data on a smartcard via bluetooth.
- Collaborated with smartcard hardware team to develop a custom protocol for serial communication.
- Integrated with a third-party biometrics SDK for fingerprint and facial authentication.
- Extracted SDK, sample app, and production app from original proof-of-concept.
- Documented SDK and version compatibility strategy for third-party developers.
- Documented smartcard API and communication protocol for third-party developers.

## Technologies

- Java
- Android
- Bluetooth
- Neurotechnology for biometrics

## Story

I led development on a client project at 8th Light for BluStor, a company building a platform for
mobile security. The project, called "GateKeeper," was the initial proof of concept for software
packages based around secure bluetooth communication with a biometrics-secured smartcard. A
companion Android SDK communicated directly with the smartcard over bluetooth using a custom
protocol.

The smartcard itself was a low-power computer, roughly the size of a credit card. It securely held
user data that was only accessible after authenticating with either fingerprint or facial data,
validated against data stored previously on the card itself.

The primary deliverable was an Android SDK which facilitated the communication with the smartcard as
well as providing the biometrics widgets for use in other Android applications. The SDKs built by
[Neurotechnology](https://neurotechnology.com/) accounted for the biometrics features of the SDK.

The secondary deliverable was a custom serial protocol to communicate with the smartcard. The
low-power nature of the smartcard meant that the communication needed to be efficient and have
limited overhead to facilitate any data transaction. The API for this communication was fully
documented as a part of delivery, including a compatibility strategy for future version changes.

The third deliverable was a proof-of-concept Android application to demonstrate the complete system
working. The user had the choice of which form of biometric data to use in establishing a profile on
the smartcard, which could be one or both of the fingerprint and facial methods. After
authentication, the user had complete read and write access to the files and folders stored on the
card.

After proving the concept, the demonstration app was further developed into a production
application.

Heavy emphasis was placed on ease of development for current and future team members and ease of use
for third-party developers.
