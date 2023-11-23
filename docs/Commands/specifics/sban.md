---
title: /sban | Commands
icon: material/block-helper
cmd_moderation: true

tags:
    - Commands
    - Utility
    - Moderation

search:
    boost: 2

hide:
    - toc

---

# <p style="color: var(--md-default-fg-color); display: inline;">:material-block-helper: Server Ban</p> (/sban)
<div style="display:inline;">
<p style="color: #7F5F02; display: inline;">Utility</p>, <p style="color: #943D73; display: inline;">Moderation</p> | <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | sban, server-ban, soft-ban
</div>


Unlike [:material-block-helper: /ban](./ban.md), which bans a player from all servers, this command bans them from the specific game server the command is fired from. Players cannot rejoin that specific server, but can rejoin the universe in other servers as they please. Once the server closes, due to inactivity or shutdown, they will be able to rejoin all servers. This command does not ban the player from servers you are in, just the specific server. If you wish to ban players from all servers, use [:material-block-helper: /ban](./ban.md).

## Parameters

| Name       | Type | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." }        | Default            | Description                                               |
|----------------|:----------:|:------------------:|:--------------------:|-----------------------------------------------------------:|
| Player         | [player](../parameters.md#player)   | :material-check: | nil                | The player you want to ban.                                |
| Reason         | [string](../parameters.md#string)   | :material-close: | nil                | The reason the player will see (filtered).                |
| Length         | [time](../parameters.md#time)     | :material-close: | Forever            | The length the player will be banned from the server for. |
| Moderator Note | [string](../parameters.md#string)   | :material-close: | "No note provided" | What other moderators will see when looking at the bans.  |

## See Also
* [:material-block-helper: Ban](./ban.md)
* [:material-block-helper: Temp Ban](./tban.md)
* [:material-block-helper: Kick](./kick.md)
* [:material-block-helper: Bans](./bans.md)
* [:material-timer-edit: Limits](./limits.md)
* [:material-server: Shutdown](./shutdown.md)
* [:material-server: fShutdown](./fshutdown.md)