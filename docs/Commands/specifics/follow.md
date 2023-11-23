---
title: /follow | Commands
icon: fontawesome/solid/location-arrow
cmd_standard: true

tags:
    - Commands
    - Standard
    - Plus

search:
    boost: 2

hide:
    - toc

status: plus
---
# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-location-arrow: Follow</p> (/follow)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-standard); display: inline;">Standard</p>,
<p style="color: var(--destrix-docs--commandcat-plus); display: inline;">Plus</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">-</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | follow
</div>
Follow another in-game player into their server if they're playing the same game.

## Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| Target | [player](../parameters.md#player) | :material-check: | nil     | The player's you want to follow. |

## See Also
* [:material-play-box: /rejoin](./rejoin.md)