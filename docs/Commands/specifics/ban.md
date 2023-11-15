---
title: /ban | Commands
description: The /ban command bans the specified player/s, with the default length being permanent. Other commands achievve similar yet different effects. Such as /temp-ban], which bans a player temporarily, or /kick, which kicks the player and allows them to rejoin after being disconnected.
icon: material/block-helper

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
<p style="color: #7F5F02; display: inline;">Utility</p>, <p style="color: #943D73; display: inline;">Moderation</p> | <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | ban
</div>
The /ban command bans the specified player/s, with the default length being permanent. Other commands achievve similar yet different effects. Such as [:material-block-helper: /temp-ban](/Commands/specifics/tban/), which bans a player temporarily, or [:material-block-helper: /kick](/Commands/specifics/kick/), which kicks the player and allows them to rejoin after being disconnected.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Player         | [player](../parameters.md#player) | :material-check:                                                                                                                                                                                    | nil                | The player you want to ban                                |
| Reason         | [string](../parameters.md#string) | :material-close:                                                                                                                                                                                    | nil                | The reason the player will see (filtered).                |
| Moderator Note | [string](../parameters.md#string) | :material-close:                                                                                                                                                                                    | "No note provided" | What other moderators will see when looking at the bans.  |



`/ban {player} {reason} {moderator-note}` | `/ban @Roblox Making annoying updates||For the greater good`

## See Also
* [:material-block-helper: /server-ban](/Commands/specifics/sban/)
* [:material-block-helper: /tban](/Commands/specifics/tban/)
* [:material-block-helper: /kick](/Commands/specifics/kick/)
* [:material-block-helper: /bans](/Commands/specifics/bans/)
* [:material-timer-edit: /limits](/Commands/specifics/limits/)