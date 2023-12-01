---
tags:
    - DAX
title: DisableEXEType - DAX
description: DisableEXEType is the function responsible for disable commands by type. Rather than disabling individual commands, you can disable them by type.
search:
  boost: 2
---

# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-plug: DAX</p>:DisableEXEType
DisableEXEType is the function responsible for disable commands by type. Rather than disabling individual commands, you can disable them by [type](../CommandTypes.md). These are not the same as categories.

## Try it
#### Parameters
| Name         	| Type   	| Default  	| Description                                                                                            	|
|--------------	|--------	|----------	|--------------------------------------------------------------------------------------------------------	|
| Command Type 	| string 	| Required 	| The type of commands you want disabled.                                                                	|
| Players      	| table? 	| nil      	| The players you want the commands to be disabled for. If blank, they will be disabled for all players. 	|

#### Examples

The example below will disable all of the commands that interfere with user interface not from Destrix, for all players.

``` lua
DAX.v1:DisableEXEType("ui-interference")
```

The example below disables all of the commands that interfere with user interface not from Destrix just for just 1 player, @DestrixApp (game.Players.DestrixApp).

``` lua
DAX.v1:DisableEXEType("ui-interference", {game.Players.DestrixApp})
```

This method accepts multiple users, as showcased below:

``` lua
DAX.v1:DisableEXEType("ui-interference", {game.Players.DestrixApp, game.Players.Wolf1te, game.Players.WXRobloxcom})   
```