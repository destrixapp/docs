---
title: DestrixIntegration:CreateCommand - DAXI
# description: DisableEXEType is the function responsible for disable commands by type. Rather than disabling individual commands, you can disable them by type.
search:
  boost: 2
---
# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-plug: DestrixIntegration</p>:CreateCommand

Use this function to create a command.

## Try it
### Parameters
| Name         	| Type   	| Default  	| Description                                                                                            	|
|:--------------	|:--------:	|:----------:	|--------------------------------------------------------------------------------------------------------:	|
| Command	| [DestrixCommand](../../../../commands/custom-commands.md) (table) 	| :material-check: 	| Use the general structure you would normally use when [creating custom commands](../../../../commands/custom-commands.md) for an experience.                                                                	|

### Examples

The example below will create a command.

``` lua
DestrixIntegration:CreateCommand(
    {
        name = "delete-donation";
        aliases = {"donation-delete"};
        description = "Remove a donation from WOS.";
        rank = 0;
        parameters = {["User"] = "user"; ["index"] = "number:i";};

        serverf = function(triggered_by:Player?, parameters:{any?})
			-- Add your server-side functionality here
		end;

        unserverf = function(triggered_by:Player?, parameters:{any?})
            -- Add your server-side undo functionality here
		end;
    };
)
```

!!! tip "[Learn more about making commands](../../../../commands/custom-commands.md)"