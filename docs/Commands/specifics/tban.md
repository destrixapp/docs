---
title: /tban | Commands
description: /tempban (or /tban) is an alternative to /ban which bans the player temporarily instead of permanently, and in all servers.
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
# <p style="color: var(--md-default-fg-color); display: inline;">:material-block-helper: Temprary Ban</p> (/tban)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-moderation); display: inline;">Moderation</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | tban, temp-ban
</div>

/tempban (or /tban) is an alternative to [:material-block-helper: /ban](/Commands/specifics/ban/) which bans the player temporarily instead of permanently, and in all servers.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-----------------------------------------------------------|
| Player         | player | :material-check:                                                                                                                                                                                    | nil                | The player you want to ban                                |
| Reason         | string | :material-close:                                                                                                                                                                                    | nil                | The reason the player will see (filtered).                |
| Length         | time   | :material-close:                                                                                                                                                                                    | Forever            | The length the player will be banned from the server for. |
| Moderator Note | string | :material-close:                                                                                                                                                                                    | "No note provided" | What other moderators will see when looking at the bans.  |

## See Also
* [:material-block-helper: /server-ban](./sban.md)
* [:material-block-helper: /ban](./ban.md)
* [:material-block-helper: /kick](./kick.md)
* [:material-block-helper: /bans](./bans.md)
* [:material-timer-edit: /limits](./limits.md)