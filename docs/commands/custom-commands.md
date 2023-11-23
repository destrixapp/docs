---
tags:
    - Commands
title: Making Custom Commands
description: How to create your own custom commands for Destrix.
cmd_index: true
search:
  boost: 2

status: beta
---
# Custom Commands

??? beta "Coming Soon"

    This feature is coming soon! You may not have access to it yet.

??? danger "Subject To Change"

    This documentation may change or be inaccurate.

## Structure

```lua linenums="0"
.
├─ Destrix
│  └─ settings/
│     └─ custom/
│        └─ .commands_v1.luau -- (1)
│  └─ loader.luau
...
```

1. We use `.commands-v1` so we can differentiate which structure version this is in just in-case we internally change the command structures.

    P.S: This is a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript).

<!-- { .sh .no-copy } -->
<!-- 
│  └─ stylesheets/
│     └─ extra.css
└─ mkdocs.yml -->

## General Layout

### Add your first command

To begin, let's start by adding your first command to this table.

```lua linenums="1" hl_lines="2-8"
return {
	{
		name = "Command Name"; -- (2)
		aliases = {"alias1","alias2"};
		description = "A description of the command.";
		rank = 0; -- (1)
		parameters = {["param1"] = "number"; ["param2"] = "time";};
	};
}
```

1. The minimum permission level required to use this command. If your command behaves differently per different permission levels, put the minimum level here. If a player's rank is below the minimum requirement, they won't even be able to trigger the command.

    Set to `#!lua rank = 0;` for all ranks.

2. ??? tip "Troubleshooting"

        <strong>My command doesn't appear</strong>
        
        If your command doesn't appear then it could be because your command.name is one of that already exists, or uses an alias of an already exisiting command. This will cause your command to be discarded. [As answered here.](#what-happens-when-i-make-my-command-name-an-already-existingbuilt-in-command)

        Still don't know? Check these out:

        * [Dummy Commands](#dummy-commands)
        * [FAQ](#faq)

??? tip "Dummy Commands"

    <i id='dummy-commands'></i>
    Dummy Commands are commands that are only visible in studio for testing purposes. This is likely because they have no functions attached. See below on how to add functions.

### Adding server-side functionality

There are 4 main functions to each command — server, server undo, client, and client undo.
Let's focus on the server-side functionality, specifically the initial execution function.

```lua linenums="1" hl_lines="9-11"
return {
    {
        name = "Command Name";
        aliases = {"alias1","alias2"};
        description = "A description of the command.";
        rank = 0; -- 
        parameters = {["param1"] = "number"; ["param2"] = "time";};

        serverf = function(triggered_by:Player?, parameters:{any?})
			-- Add your server-side functionality here
		end;
    };
}
```

| Parameters           | Type   | Guranteed :material-information-outline:{ .dd-popup popup-content="Is this parameter certain to appear?" title="Is this parameter certain to appear?" }             | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------|
| `triggered_by`         | [player](https://create.roblox.com/docs/reference/engine/classes/Player) | :material-close:{ title="This parameter is not guranteed." }                                                                                                                                                                                    | The player that triggered the command.                                |
| `parameters`         | [table?](https://create.roblox.com/docs/reference/engine/libraries/table) | :material-close:{ title="This parameter is not guranteed." }                                                                                                                                                                                    | A list of all parameters used by the player who triggered the command.                                |

### Adding server-side undo functionality

This function is not required. Infact, no function is. However, if your command benefits from an undo functionality that executes server-side, this is how to do it.
By default, the undo functionality is triggered via `/un{name} {normal parameters}`.

```lua linenums="1" hl_lines="13-15"
return {
    {
        name = "Command Name";
        aliases = {"alias1","alias2"};
        description = "A description of the command.";
        rank = 0; -- 
        parameters = {["param1"] = "number"; ["param2"] = "time";};

        serverf = function(triggered_by:Player?, parameters:{any?})
			-- Add your server-side functionality here
		end;

        unserverf = function(triggered_by:Player?, parameters:{any?})
            -- Add your server-side undo functionality here
		end;
    };
}
```

#### Override undo command

```lua linenums="1" hl_lines="8-8"
return {
    {
        name = "Command Name";
        aliases = {"alias1","alias2"};
        description = "A description of the command.";
        rank = 0; -- 
        parameters = {["param1"] = "number"; ["param2"] = "time";};
        undo_cmd = "Command Name Priori Incantatem" -- (1)

        serverf = function(triggered_by:Player?, parameters:{any?})
			-- Add your server-side functionality here
		end;

        unserverf = function(triggered_by:Player?, parameters:{any?})
            -- Add your server-side undo functionality here
		end;
    };
}
```

1. This will overwrite the undo command so that `/Command Name Priori Incantatem` will be used instead of `/unCommand Name`.

    P.S. This is just for demonstration purposes, you can not include spaces as they will be automatically coverted to hyphens, and your command will become lowercase.

---

### Adding client-side functionality

If the command you want to implement is better suited to be executed on the client, you can do so via the code below. You can add both server-side functionality (along with undo) and client-side functionality.

```lua linenums="1" hl_lines="9-11"
return {
    {
        name = "Command Name";
        aliases = {"alias1","alias2"};
        description = "A description of the command.";
        rank = 0; -- 
        parameters = {["param1"] = "number"; ["param2"] = "time";};

        clientf = function(triggered_by:Player?, parameters:{any?})
			-- Add your client-side functionality here
		end;
    };
}
```

Destrix will execute the `#!lua clientf()` function on the client automatically.

### Adding client-side undo functionality

If you need to carry out a client-sided undo functionality, you can add the following highlighted function below.

```lua linenums="1" hl_lines="13-15"
return {
    {
        name = "Command Name";
        aliases = {"alias1","alias2"};
        description = "A description of the command.";
        rank = 0;
        parameters = {["param1"] = "number"; ["param2"] = "time";};

        clientf = function(triggered_by:Player?, parameters:{any?})
			-- Add your client-side functionality here
		end;

        unclientf = function(triggered_by:Player?, parameters:{any?})
			-- Add your client-side undo functionality here
		end;
    };
}
```

???+ question "Need inspiration?"

    [Start viewing some of our built-in commands.](./specifics/ban.md)

## FAQ

### What happens when I make my command name an already existing/built-in command?

If you try to make a custom command with the same name of a command that already exisits, your command will be discarded. This is to prevent bugs/issues as only one command that shares the same name. This is also the case with aliases.