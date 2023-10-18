---
title: Interfacing

tags:
    - DAX
---
# Interfacing

DAX is automatically launched and placed into ServerScriptService if Destrix is installed. Require the DAX module via these simple steps, with error-proofing for safety. Requiring the module is quite simple:
```lua
local DAX = require(game.ServerScriptService:WaitForChild("DAX", 6)) --(1)
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