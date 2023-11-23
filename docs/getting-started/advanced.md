---
title: Advanced Configuration
description: This page outlines relevant information for advanced configuration in Destrix. Recommended for those with a greater grasp on lua, but this tutorial should be understandable for all skillsets nonetheless.
icon: material/cog

search:
    boost: 3
---

# Advanced
This page outlines relevant information for advanced configuration in Destrix. Recommended for those with a greater grasp on lua, but this tutorial should be understandable for all skillsets nonetheless.

??? example "What this page outlines"

    This page outlines information on how to limit commands, disable commands by default, blacklist gears and items, etc.

---

## Adding advanced configurations
Navigate to your settings module, named `settings` under the Destrix loader. Create a new `ModuleScript` and name it `.advanced`. To start, you can set the source as follows:

```lua
return {
    extended_config_version = 1;
}
```

## Limit Parameters
> How do I limit parameters for certain commands?

This section outlines how you can limit parameters for certain commands. However, this is only compatible for parameter types of `number` and `number:i` currently.

You can use the following as a template on how to implement this. You can add this to your table in `.advanced`.

```lua
parameter_limits = {
    ["server-ban"] = {
        ignore = 4; -- (1)
        
        max = {
            -- parameter name = max_value;
            length = 604800;
        };
    };	
};
```

1. The minimum permission level to bypass this limit.

In this case, the above code will limit anyone that is not an [admin](./configurations.md#default-ranks) so that they can not use the `/server-ban` command to ban anyone for over a week.

??? warning "Support Issues"

    Some commands use custom interfaces and may not adhere to these limits.

## Restrict Commands
> How do I restrict commands for certain permission levels?

This section outlines how you can restrict commands for permission levels. Let's say that you do like how [moderators](./configurations.md#default-ranks) can use the [`server-ban`](../commands/specifics/sban.md), and you want to limit it to [admins](./configurations.md#default-ranks), which is permission level 4 by default. With the following code, you can archive this.

```lua
restricted_commands = {
    ["server-ban"] = {
        override_min_rank = 4;
    }
};
```

You can do this with any command, simply replace `server-ban` with the command's primary alias you want to disable. Support for secondary aliases will come at a later date.