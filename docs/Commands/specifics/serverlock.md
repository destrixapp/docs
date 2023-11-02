---
title: /serverlock | Commands
icon: material/server

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

---
# <p style="color: rgb(220,220,220); display: inline;">:material-server: Serverlock</p> (/serverlock)
<div style="display:inline;">
<p style="color: #7F5F02; display: inline;">Utility</p> | <p style="color: rgb(220,220,220); display: inline;">3</p> | <p style="color: rgb(180,180,180); display: inline;"> Added 0.0.1</p> | serverlock, slock
</div>
/serverlock (or /slock) locks the server for players that are not the specified rank or higher, so /serverlock 4 would lock the server so anyone other than permission level 4 or higher will be disconnected when they try to join.

## Arguments

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-----------------------------------------------------------|
| Rank         | number | :material-close:                                                                                                                                                                                    | 1                | The minimum rank required to join the server                                |

## See Also
* [:material-server: /shutdown](/Commands/specifics/shutdown/)
* [:material-server: /fshutdown](/Commands/specifics/fshutdown/)