---
title: /serverlock | Commands
icon: material/server
cmd_utility: true

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-server: Server Lock</p> (/server-lock)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.0.1</p> | server-lock, slock
</div>

/serverlock (or /slock) locks the server for players that are not the specified rank or higher, so /serverlock 4 would lock the server so anyone other than permission level 4 or higher will be disconnected when they try to join.

## Arguments

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-----------------------------------------------------------|
| Rank         | number | :material-close:                                                                                                                                                                                    | 1                | The minimum rank required to join the server                                |

## See Also
* [:material-server: /shutdown](/Commands/specifics/shutdown/)
* [:material-server: /fshutdown](/Commands/specifics/fshutdown/)