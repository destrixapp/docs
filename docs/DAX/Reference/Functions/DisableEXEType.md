# DAX:DisableEXEType

DisableEXEType is the function responsible for disable commands by type. Rather than disabling individual commands, you can disable them by [type](/DAX/Reference/CommandTypes/). These are not the same as categories.

## Try it
#### Parameters


``` lua
print("what is wrong with this markdown")
```

## Examples

``` lua
DAX:DisableEXEType("ui-interference")
```

The above disables all of the commands that interfere with user interface not from Destrix.

``` lua
DAX:DisableEXEType("ui-interference", {game.Players.WWolfite})
```

The above disables all of the commands that interfere with user interface not from Destrix just for WWolfite (game.Players.WWolfite)