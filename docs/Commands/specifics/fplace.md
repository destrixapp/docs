---
title: /fplace | Commands
icon: material/earth-arrow-up

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-earth-arrow-up: Force Place</p> (/fplace)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>,
| <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | fplace, force-place
</div>

Force a player to teleport to another place/universe with /fpace (or /forceplace).

## Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| Victim | [player](../parameters.md#player) | :material-close: | @me     | The player's you want to toggle the command on. |
| PlaceID | [number](../parameters.md#number) | :material-close: | game.PlaceId     | The place ID to send the victim to. |

<!-- ## See Also -->
<!-- * [:fontawesome-solid-ranking-star: /rank](/Commands/specifics/rank/) -->