---
tags:
    - DAX
    - Type
    - Unstable
title: Command Types
description: All the command types in Destrix that are used for DAX.
hide:
    - toc
---
# Command Types
Please note that these are not final and maybe be further changed.

This page contains all the command types used in Destrix. Command types are a more accurate label of commands, they are not categories.

| Name                         	| Examples                                             	| Description                                                                             	| Added          	| Limit                                                       	|
|------------------------------	|------------------------------------------------------	|-----------------------------------------------------------------------------------------	|----------------	|-------------------------------------------------------------	|
| ``ui-interference``          	| [/hideui](../../../Commands/specifics/hideui.md), [/showui](../../../Commands/specifics/showui.md)                                     	| Commands that interfere with other game UI.                                             	| _2 Jan, 2023_  	| _None_                                                      	|
| ``character-interference-2`` 	| [/kill](../../../Commands/specifics/kill.md), [/fling](../../../Commands/specifics/fling.md), [/sit](../../../Commands/specifics/sit.md)                                  	| Commands that can move, damage/kill, morph, or add animations to characters.            	| _10 Apr, 2023_ 	| _None_                                                      	|
| ``character-interference-1`` 	| [/paint](../../../Commands/specifics/paint.md), [/bighead](../../../Commands/specifics/bighead.md)                                     	| Commands that change the appearance of characters in a small way.                       	| _10 Apr, 2023_ 	| _None_                                                      	|
| ``moderation-2``             	| [/softban](../../../Commands/specifics/sban.md)                                             	| Small moderation commands like /softban (server bans).                                  	| _10 Apr, 2023_ 	| _None_                                                      	|
| ``moderation-1``             	| [/kick](../../../Commands/specifics/kick.md), [/ban](../../../Commands/specifics/ban.md)                                          	| Moderation commands. Can only be disabled by the Destrix system to prevent attacks.     	| _10 Apr, 2023_ 	| _0 seconds_ <strong style = "color: #0388FC;">^</strong>    	|
| ``server-interference``      	| [/shutdown](../../../Commands/specifics/shutdown.md)                                            	| Commands that may stop servers or reboot them.                                          	| _10 Apr, 2023_ 	| _60 <br>seconds_<strong style = "color: #F00;"> \*</strong> 	|
| ``software``                 	| [/admins](../../../Commands/specifics/admins.md), [/cmds](../../../Commands/specifics/commands.md)                                       	| Commands that are for using Destrix easier. Can only be disabled by the Destrix system. 	| _10 Apr, 2023_ 	| _0 seconds_ <strong style = "color: #0388FC;">^</strong>    	|
| ``contact``                  	| [/modcall](../../../Commands/specifics/modcall.md)                                             	| Commands that allow players to interact with moderators/admins.                         	| _10 Apr, 2023_ 	| _30 minutes_                                                	|
| ``workspace-interference``   	| [/reload-workspace](../../../Commands/specifics/reloadmap.md)                         	| Commands that interfere with the workplace.                                             	| _12 Apr, 2023_ 	| _None_                                                      	|
| ``prompt``                   	| [/prompt-gamepass](../../../Commands/specifics/prompt-gamepass.md), [prompt-asset](../../../Commands/specifics/prompt-asset.md)                         	| Commands that prompt users.                                                             	| _12 Apr, 2023_ 	| _None_                                                      	|
| ``teleport``                 	| [/fplace](../../../Commands/specifics/fplace.md), [/rejoin](../../../Commands/specifics/rejoin.md), [/reconnect](../../../Commands/specifics/rejoin.md.md)                         	| Commands that use TeleportService.                                                      	| _12 Apr, 2023_ 	| _60 <br>seconds_<strong style = "color: #F00;"> \*</strong> 	|
| ``fun``                      	| [/fire](../../../Commands/specifics/fire.md), [/sit](../../../Commands/specifics/sit.md), [/stratosphere](../../../Commands/specifics/stratosphere.md)                           	| Commands in the category 'fun'.                                                         	| _12 Apr, 2023_ 	| _None_                                                      	|
| ``danger``                   	| /stopmods <strong style = "color: #000;">\*</strong> 	| Commands that can stop admin commands. Can only be disabled by the Destrix system.      	| _12 Apr, 2023_ 	| _0 seconds_ <strong style = "color: #0388FC;">^</strong>    	|
| ``dev``                      	| _None_                                               	| Hidden developer commands. Can only be disabled by the Destrix system.                  	| _12 Apr, 2023_ 	| _0 seconds_ <strong style = "color: #0388FC;">^</strong>    	|

<small><strong style="color: #F00;">\*</strong> Cannot be interacted with for 30 seconds after limit expires.</small>
<br>
<small><strong style="color: #0388FC;">^</strong> Can only be interacted with by Destrix.</small>