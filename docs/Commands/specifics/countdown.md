---
title: /countdown | Commands
description: /countdown starts a countdown onscreen for all players at the top of their screen.
icon: material/av-timer
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
# <p style="color: var(--md-default-fg-color); display: inline;">:material-av-timer: Countdown</p> (/countdown)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | countdown
</div>

/countdown starts a countdown onscreen for all players at the top of their screen.

## Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| Time | [time](../parameters.md#time) | :material-close: | @me     | The amount of time to countdown. |