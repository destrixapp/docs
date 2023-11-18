---
title: /poll | Commands
# description: The /ban command bans the specified player/s, with the default length being permanent. Other commands achievve similar yet different effects. Such as /temp-ban], which bans a player temporarily, or /kick, which kicks the player and allows them to rejoin after being disconnected.
icon: material/poll

tags:
    - Commands
    - Utility
    - Plus

search:
    boost: 2

hide:
    - toc

comments: true
status: plus
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-poll: Poll</p> (/poll)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-plus); display: inline;">Plus</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | poll
</div>

???+ plus

    The /poll command is currently in beta and may malfunction. It is currently only available to plus subscribers.

The /poll command displays a poll to (by default) all members in the server with the options provided. The command is a shortcut to open the poll creation menu.

## Parameters

| Name           | Type   | Required | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Player         | [player](../parameters.md#player) | :material-check:                                                                                                                                                                                    | `@everyone`                | The player to poll, or everyone.                                |



## See Also
* [Plus](?plus)
<!-- * [:material-block-helper: /server-ban](/Commands/specifics/sban/)
* [:material-block-helper: /tban](/Commands/specifics/tban/)
* [:material-block-helper: /kick](/Commands/specifics/kick/)
* [:material-block-helper: /bans](/Commands/specifics/bans/)
* [:material-timer-edit: /limits](/Commands/specifics/limits/) -->