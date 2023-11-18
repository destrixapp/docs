---
title: Interfacing

tags:
    - DAXI
---
# Interfacing

DAXI is automatically launched and placed into ServerScriptService if Destrix is installed. Require the DAXI module via these simple steps, with error-proofing for safety. Requiring the module is quite simple:
```lua
local DAXI = require(game.ServerScriptService:WaitForChild("DAXI", math.huge())) --(1)   
```

1. Call WaitForChild just in-case an error occurs and DAXI is delayed.

!!! warning "Warning"
    The above code will yield your entire script until DAXI is initiated, which takes on average around 2-16 seconds. If DAXI doesn't initialise because of an error — or Roblox is experiencing issues — your script will never load.

    We recommend you to use a seperate script for DAXI integration, or set up your own wrapper if your game is big.

## Calling a function
Calling a function is as simple as..
```lua
DAXI.v1:FunctionHere(paramaters)
    -- handle it here
end)
```