---
tags:
    - DAX
title: FireCommand
description: FireCommand lets you fire command logic for specific players artificially.
search:
  boost: 2
---

# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-plug: DAX</p>:FireCommand

FireCommand lets you fire command logic for specific players artificially.

## Try it
#### Parameters
| Name               |   Type  |     Required     | Default |                                                                                           Description |
|--------------------|:-------:|:----------------:|:-------:|------------------------------------------------------------------------------------------------------:|
| Command Name or ID | string? | :material-check: | nil     | The command you want to fire. You can either use the command name as a string, or the ID as a number. |
| Player             | [player](../../../../Commands/parameters.md#player)  | :material-close: | nil     | The player that the command will act like it has been fired by, nil if not needed.                                                           |
| Parameters         | table?  | :material-close: | nil     | A dictionary of parameters, keys and values.                                                          |

#### Examples

The example below will fire the command "plus," and show the Destrix Plus menu to all players.

``` lua
DAX.v1:FireCommand("plus", nil, nil)
```

The example below will fire the "ban" command on @DestrixApp (game.Players.DestrixApp).

``` lua
DAX.v1:FireCommand("ban", {["player"] = game.Players.DestrixApp; ["reason"] = "Example.", ["time"] = 3600})
```