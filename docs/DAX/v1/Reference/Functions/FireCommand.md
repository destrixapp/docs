---
tags:
    - DAX
title: FireCommand
description: FireCommand lets you fire command logic for specific players artificially.
search:
  boost: 2
---

# DAX:FireCommand

FireCommand lets you fire command logic for specific players artificially.

## Try it
#### Parameters
| Name               	| Type    	| Default  	| Description                                                                                           	|
|--------------------	|---------	|----------	|-------------------------------------------------------------------------------------------------------	|
| Command Name or ID 	| string? 	| Required 	| The command you want to fire. You can either use the command name as a string, or the ID as a number. 	|
| Players            	| table?  	| nil      	| Which players will the command be fired on?                                                           	|
| Arguments          	| table?  	| nil      	| A dictionary of arguments, keys and values.                                                           	|

#### Examples

The example below will fire the command "plus," and show the Destrix Plus menu to all players.

``` lua
DAX:FireCommand("plus", nil, nil)
```

The example below will fire the "ban" command on @WWolfite (game.Players.WWolfite).

``` lua
DAX:FireCommand("ban", {game.Players.WWolfite}, {["reason"] = "Example.", ["time"] = "3600"})
```