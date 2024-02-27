---
title: /ban | Commands
description: The /ban command bans the specified player/s, with the default length being permanent. Other commands achieve similar yet different effects. Such as /temp-ban, which bans a player temporarily, or /kick, which kicks the player and allows them to rejoin after being disconnected.
icon: material/block-helper
uses_custom_cover: true
cmd_moderation: true

tags:
    - Commands
    - Utility
    - Moderation

search:
    boost: 2

hide:
    - toc

comments: true

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-block-helper: Ban</p> (/ban)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-moderation); display: inline;">Moderation</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | ban
</div>


The /ban command bans the specified player/s, with the default length being permanent. Other commands achieve similar yet different effects. Such as [:material-block-helper: /temp-ban](./tban.md), which bans a player temporarily, or [:material-block-helper: /kick](./kick.md), which kicks the player and allows them to rejoin after being disconnected.

## Parameters

| Name           | Type   | Required :material-information-outline:{ .dd-popup popup-content="This command will bring up a menu if the required parameters are not provided." title="This command will bring up a menu if the required parameters are not provided." } | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Player         | [player](../parameters.md#player) | :material-minus:{ title="This parameter is partially required." .dd-popup popup-content="This parameter is partially required." }                                                                                                                                                                                    | Nothing                | The player you want to ban                                |
| Reason         | [string](../parameters.md#string) | :material-close:{ title="This parameter is not required." .dd-popup popup-content="This parameter is not required." }                                                                                                                                                                                    | Nothing                | The reason the player will see (filtered)                |
| Moderator Note | [string](../parameters.md#string) | :material-close:{ title="This parameter is not required." .dd-popup popup-content="This parameter is not required." }                                                                                                                                                                                    | "No note provided" | What other moderators will see when looking at the bans  |



`/ban {player} {reason} {moderator-note}` | `/ban @Roblox Making annoying updates||For the greater good`

## View Bans
You can use [:material-block-helper: /bans](./bans.md) as a shortcut to view all the currently banned players.

## See Also
* [:material-block-helper: /server-ban](./sban.md)
* [:material-block-helper: /tban](./tban.md)
* [:material-block-helper: /kick](./kick.md)
* [:material-block-helper: /bans](./bans.md)
* [:material-timer-edit: /limits](./limits.md)