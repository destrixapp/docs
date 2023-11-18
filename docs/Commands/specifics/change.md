---
title: /change | Commands
# description: The /ban command bans the specified player/s, with the default length being permanent. Other commands achievve similar yet different effects. Such as /temp-ban], which bans a player temporarily, or /kick, which kicks the player and allows them to rejoin after being disconnected.
icon: octicons/graph-16

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

comments: true
status: new
---
# <p style="color: var(--md-default-fg-color); display: inline;">:octicons-graph-16: Change</p> (/change)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | change
</div>


Use the /change command to change a player's leaderstat to the specified value.

## Parameters

| Name           | Type   | Required | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Player         | [player](../parameters.md#player) | :material-check:                                                                                                                                                                                    | @me                | The player of which whose leaderstat to change.                                |
| Leaderstat Name         | [string:nb](../parameters.md#string) | :material-check:                                                                                                                                                                                    | nil                | The leaderstat you want to change.                |
| Value | [any](../parameters.md#any) | :material-check:                                                                                                                                                                                    | nil | The value you want to set it to  |



`/change {leaderstat} {value}` | `/change @DestrixApp wins 5`

<!-- ## See Also
* [:material-block-helper: /server-ban](/Commands/specifics/sban/)
* [:material-block-helper: /tban](/Commands/specifics/tban/)
* [:material-block-helper: /kick](/Commands/specifics/kick/)
* [:material-block-helper: /bans](/Commands/specifics/bans/)
* [:material-timer-edit: /limits](/Commands/specifics/limits/) -->