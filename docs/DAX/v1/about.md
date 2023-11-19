---
tags:
    - DAX
    - Security
title: About
description: About the Destrix API Module (DAX), what it does, what it can't, and what it is.
icon: material/book-open
search:
  boost: 10
---
# Destrix API Module (DAX) Overview

## Introduction

The Destrix API Module, abbreviated as DAX (or DAXM), is a specialized module designed to facilitate effortless server-side interaction and control over Destrix for scripts. DAXM is distinct from DXCA (Destrix Client API Module) and should not be confused with it.

## Core Functionalities

DAXM is effective in performing elementary tasks including but not limited to:

* Disabling specific commands for designated permission levels,
* Temporarily concealing the panel for enhanced user experience.

However, there are explicit limitations to DAXM's capabilities. It is not designed to:

* Alter user settings or data,
* Monitor client-generated requests,
* Modify pre-established settings in [Configurations](../../Getting_Started/configurations.md).

## Recommended Applications
DAXM is optimized for enhancing User Experience (UX). Typical use cases encompass:

* Concealing panels during transitional phases like loading screens and cinematic cutscenes to ensure uninterrupted user engagement,
* Deactivating commands that potentially conflict with other scripts, maintaining the game’s functional integrity.

Additionally, DAXM can be employed to retrieve specific data including bans or command logs.

## Security Protocols
### Your Responsibility
We advocate for a conservative approach in utilizing DAXM via remote events triggered by a client. It’s advisable to initiate detection of user involvement in an event server-side, for instance, during portal entry.

In instances where the deployment of a remote event is indispensable, exercise caution to prevent any potential disablement impacts on other players. Ensure the prompt elimination of remote events associated with DAXM that are rendered obsolete or inactive.
### Our Assurance
The incorporation of DAXM in your game is characterized by minimal risk, attributed to its confined interference with Destrix. We are committed to ensuring a seamless, secure experience. Any identified bugs or vulnerabilities can be promptly reported through [destrix.app/report]() for expedited resolution.