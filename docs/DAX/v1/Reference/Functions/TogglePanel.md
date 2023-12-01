---
tags:
    - DAX
title: TogglePanel - DAX
description: TogglePanel lets you toggle the panel of a player (or multiple).
search:
  boost: 2
---

# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-plug: DAX</p>:TogglePanel

TogglePanel lets you toggle the panel of a player (or multiple).

## Try it
#### Parameters
| Name               |   Type  |     Required     | Default |                                                                                           Description |
|--------------------|:-------:|:----------------:|:-------:|------------------------------------------------------------------------------------------------------:|
| State | [boolean](../../../../Commands/parameters.md#boolean) | :material-check: | `false`     | The state to set the panel to. |
| Players             | table?  | :material-close: | nil     | A table of players that this execution will effect. Set to nil to use a different sort.                                                           |
| Permission Level             | [number:i](../../../../Commands/parameters.md#number)  | :material-close: | nil     | An alternative to the players parameter, selects all players with that permission level.                                                           |

#### Examples

The example below will hide the panel from the specified player.

``` lua
DAX.v1:FireToggle(false, {game.Players.DestrixApp})
```

The example below will hide the panel from all users with the permission level of 3 or lower, if they have it open.

``` lua
DAX.v1:FireCommand(false, nil, 3)
```