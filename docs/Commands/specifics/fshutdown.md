---
title: /fshutdown | Commands
icon: material/server
cmd_utility: true

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

comments: true
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-server: Force Shutdown</p> (/fshutdown)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">5</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | fshutdown, force-shutdown
</div>

Similiar to [/shutdown](./shutdown.md), /fshutdown shuts the server instantly without Soft Shutdown activating. Without this, /fshutdown kicks all the players, usually within 3 seconds.