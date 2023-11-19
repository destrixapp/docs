---
title: Configurations
description: What's this one do? | If you ever forget or don't know what a setting does, refer to this guide to understand it!
icon: material/cog

search:
    boost: 3
---
# :material-cog: Configurations
> "What does this one do?"

Settings can be overwhelming, with so many options, it's easy to get lost at some point. If you ever forget or don't know what a setting does, refer to this guide to understand it! This will hopefully make certain you don't break anything.


:material-information: This documentation is incomplete. Please come back later.

## Ranks
### Default Ranks
| Rank Name              | Permission Level | Commands                                                    | Ban Limit | Common Use                                                                                                |
|:-----------------------|:----------------:|:-----------------------------------------------------------:|:---------:|----------------------------------------------------------------------------------------------------------:|
| Creator                | 6                | All Commands                                                | *         | Typically reserved for the creator of the game/group, or co-owners that you trust with full access.       |
| Developers             | 5                | [/fshutdown](../Commands/specifics/fshutdown.md)                                                  | 700       | For developers of the game, admins and moderators will not need these commands.                           |
| Admins                 | 4                | [/shutdown](../Commands/specifics/shutdown.md), [/ban](../Commands/specifics/ban.md)                                             | 600       | Administrators will be able to do most commands available on Destrix.                                     |
| Moderators             | 3                | [/tban](../Commands/specifics/tban.md), [/sban](../Commands/specifics/sban.md), all "Fun" commands                            | 300       | Moderators will be able to temporarily ban players, as well as use all commands under the "fun" category. |
| Privileged             | 2                | Cosmetic commands                                           |           | Privileged users will be able to use cosmetic commands on other players.                                  |
| VIP                    | 1                | Cosmetic commands, (self only)                              |           | VIP users will be able to use cosmetic commands, but only on themselves.                                  |
| Player (aka. NonAdmin) | 0                | Software commands and other harmless commands like [/rejoin](../Commands/specifics/rejoin.md). |           | Every player will receive this rank.                                                                      |

```lua
ranks = {
    -- (1)
    {6, "Creator"};
    {5, "Developer", 700, {"Username", 5230234514}};
    {4, "Admin", 600, {"Username", 0}};
    {3, "Moderator", 300, {"Username", 0}};
    {2, "Privileged", {"Username", 0}};
    {1, "VIP", {"Username", 0}};
    {0, "Player"};
}
```

1. Form:

        {rank, name, banlimit? {whitelist}}

### Adding custom ranks
Adding custom ranks is a bit complicated.

An entry to the ranks table is composed of basic information, such as the rank permission level, the name, the ban limit (sometimes), and the whitelist table.
The rank permission level of a custom rank can be anything from 1-1000, the rank with the highest permission level and no whitelist table will be elected as the Creator role. If this does not exist, another rank will automatically be created.

You can create your own ranks with the template below, however, all ranks with a permission level at or above `6` will be granted all permissions.

```lua
{3, "CustomRank", 400, {"Username", 0}}; -- (1)
```

1. The `ban_limit` variable does not need to be included in ranks at or below permission level 2, as they can not use ban commands.

### Auto Ranks
Automatically give users ranks, if they own a gamepass, are in a group, are friends with you, own a private server, or played the game.

`auto_ranks` annotated:

```lua
automated_ranks = {

-- What is this? (1)
gamepasses = {
    [0] = "Player";
};

-- What about this? (2)
groups = {
    [0] = {
        [254] = "Admin";
        [1] = "VIP";
    };
};

friends = "Player";
private_server_owner = "Player";
player = "Player";
};
```

1. You can give a user a rank based on whether or not they own a gamepass.

        [`gamepass_id`] = "`rank_name`";

2. You can give a user a rank based on whether or not they're in a group, or what role they're at.

        [`group_id`] = {
            [`role_id`] = "`rank_name`";
        }
