---
title: /kick | Commands
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

# <p style="color: var(--md-default-fg-color); display: inline;">:material-block-helper: Kick</p> (/kick)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-moderation); display: inline;">Moderation</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | kick
</div>

/kick can kick a player (disconnect them) from the current server. However, they can join back. See [/ban](/Commands/specifics/ban/) for options to ban a player.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-----------------------------------------------------------|
| Player         | player | :material-check:                                                                                                                                                                                    | nil                | The player you want to kick.                              |
| Reason         | string | :material-close:                                                                                                                                                                                    | nil                | The reason the player will see (filtered).                |

## See Also
* [/ban](/Commands/specifics/ban/)
* [/tban](/Commands/specifics/tban/)
* [/sban](/Commands/specifics/sban/)