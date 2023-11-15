---
title: Interfacing

tags:
    - DAX
---
# Interfacing

DAX is automatically launched and placed into ServerScriptService if Destrix is installed. Require the DAX module via these simple steps, with error-proofing for safety. Requiring the module is quite simple:
```lua
local DAX = require(game.ServerScriptService:WaitForChild("DAX", math.huge())) --(1)   
```
<!-- ```lua
local success, err = pcall(function()
    require(game.ServerScriptService:WaitForChild("DAX", 6)) --(1)
end)

if not success then
    warn(err)
end
``` -->

1. Call WaitForChild just in-case an error occurs and DAX is delayed.

!!! warning "Warning"
    The above code will yield your entire script until DAX is initiated, which takes on average around 2-16 seconds. If DAX doesn't initialise because of an error — or Roblox is experiencing issues — your script will never load.

    We recommend you to use a seperate script for DAX integration, or set up your own wrapper if your game is big.

## Calling a function
Calling a function is as simple as..
```lua
DAX.v1:FunctionHere(paramaters)
    -- handle it here
end)
```