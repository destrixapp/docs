---
title: /viewpl | Commands
description: View the Player Logs of a user on Destrix. A profile showcasing all of their warnings, bans, violations, etc. Also including relevant information such as when they joined, if they're ID Verified, and other information.
icon: fontawesome/solid/user-shield

tags:
    - Commands
    - Utility
    - Software

search:
    boost: 2

hide:
    - toc

comments: true
status: new
---
# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-user-shield: ViewPL</p> (/viewpl)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-software); display: inline;">Software</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | viewpl, view-player-logs
</div>


The /viewPL (or /view-player-logs) command will open the [Player Logs](/404.html) of the player, a profile showcasing all of their warnings, bans, violations, etc. Also including relevant information such as when they joined, if they're [ID Verified](https://en.help.roblox.com/hc/en-us/articles/4407282410644-Age-ID-Verification), and other information.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| User         | [user](../parameters.md#user) | :material-close:                                                                                                                                                                                    | `@me`                | The player's logs you wish to view                                |

`/viewpl 655331725`

## See Also
* [:material-transit-connection-variant: /connection-logs](./connection-logs.md)
* [User Parameter](../parameters.md#user)