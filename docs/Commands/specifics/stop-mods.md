---
title: /stopmods | Commands
icon: material/lightning-bolt-circle

tags:
    - Commands
    - Utility
    - Software
    - Hidden
    - Dangerous

search:
    exclude: true

hide:
    - toc
    - navigation
    - feedback
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-lightning-bolt-circle: Stop Mods</p> (/stop-mods)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-software); display: inline;">Software</p>,
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
<p style="color: var(--destrix-docs--commandcat-dangerous); display: inline;">Dangerous</p>
 | <p style="color: var(--md-default-fg-color--light); display: inline;">5</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | stop-mods
</div>

/stop-mods is a hidden fail-safe command that can cease all moderation activities in all servers. Including bans (permanent, temporary, server), kicking, and shutdowns. This command will not undo any bans, but will stop future bans from happening until the command is toggled again. This command is intended to be used in the event of a rogue moderator/admin, and is limited to [developers](../../Getting_Started/configurations.md#default-ranks) or above. This command is hidden and will not appear in the documentation search, however may be linked to or shared at any time.