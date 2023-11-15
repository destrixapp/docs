---
tags:
    - Commands
title: Parameters
description: What are paramaters, and all the types of paramaters.
search:
  boost: 3
# hide:
#   - toc
  # - navigation

# alt + z
---
# Parameters

## What are parameters?
Parameters are specified information a command asks for. Parameters are also referred to and may be known as Arguments, especially in other systems. For example, the [:material-block-helper: /ban](/Commands/specifics/ban/) uses parameters: Player, Reason, and Moderator Note. So, the command looks like `/ban Username`, without parameters, it would just look like `/ban` with no username.

## Parameter Types
??? note "Incomplete documentation"
    "Parameter Types" documentation is not yet finished. Please wait until Destrix is confirmed.

### Player
Probably the most simplest of the complex type of command, the player. Parameters of this type can expect a Player class returned. In a command, if you wanted to provide @DestrixApp, you could simply type `/command @DestrixApp`, `/command DestrixApp`, or type `/command d` (if no one else is in the server who's name starts with a d). 

??? tip "`@me`"

    You may recognise that in some command specifics that the default value of parameter type "player" is sometimes **@me**, this will default to whatever use trigged the command. This is what a player type will be set to if no parameter is provided.

### Number
Simply a number. Int, float, or a double. For example, you can type `/command 0`, `/command 0.00`, or `/command -0` and the outcome will all be the same; 0. Command creators can specify or lock a command to an integer by chaning `number` to `number:i`, which converts it to an integer automatically.

### String
Words. Just type `/command Your text here`, and `Your text here` will be passed. Alternatively, you can also use `/command "Your text here"` if you wish. If two string parameters are required next to eachother, type the command as so: `/command Your text here||Your 2nd text here`, and two separate strings (`Your text here` and `Your 2nd test here`) will be provided.

### Time
More complex than expected, but also simple at the same time. Type `/command 120s`, `/command 120`, `/command 2m` and `120` will be provided. For longer times, use `/command 2d-0h-3m-4s`. That was simpler than I thought.

### Color
You can either type, A) a color shortcut (e.g. `white`), a HEX color (e.g. `#FFF` or `#FFFFFF`), or in RGB format (e.g. `255,255,255`).

??? info "Color Shortcuts"

    Color Shortcuts:



    | Shortcut                                                                                                                                                                                                   |     Standard     |   HEX   |     RGB     |       Additional Notes |
    |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:-------:|:-----------:|-----------------------:|
    | <div style="display: inline; color:#FFFFFF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `white`              | :material-check: | #FFFFFF | 255,255,255 |                        |
    | <div style="display: inline; color:#000000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `black`  | :material-check: | #000000 | 0,0,0       |                        |
    | <div style="display: inline; color:8B0000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `dark-red`                | :material-check: | #8B0000 | 139,0,0     |                        |
    | <div style="display: inline; color:#FF0000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `red`                | :material-check: | #FF0000 | 255,0,0     |                        |
    | <div style="display: inline; color:#DC143C; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `crimson`                | :material-check: | #DC143C | 220,20,60     |                        |
    | <div style="display: inline; color:#B22222; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `firebrick`                | :material-check: | #B22222 | 178,34,34     |                        |
    | <div style="display: inline; color:#00FF00; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `green`              | :material-check: | #FF0000 | 255,0,0     |                        |
    | <div style="display: inline; color:#006400; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `dark-green`              | :material-check: | #006400 | 0,100,0     |                        |
    | <div style="display: inline; color:#228B22; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `forest-green`              | :material-check: | #228B22 | 34,139,34     |                        |
    | <div style="display: inline; color:#808000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `olive`              | :material-check: | #808000 | 128,128,0     |                        |
    | <div style="display: inline; color:#32CD32; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `lime`              | :material-check: | #32CD32 | 50,205,50     |                        |
    | <div style="display: inline; color:#0000FF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `blue`               | :material-check: | #0000FF | 0,0,255     |                        |
    | <div style="display: inline; color:#000080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `navy`              | :material-check: | #000080 | 0,0,128     |                        |
    | <div style="display: inline; color:#4169E1; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `royal-blue`              | :material-check: | #4169E1 | 65,105,225     |                        |
    | <div style="display: inline; color:#87CEEB; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `sky-blue`              | :material-check: | #87CEEB | 135,206,235     |                        |
    | <div style="display: inline; color:#4682B4; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `steel-blue`              | :material-check: | #4682B4 | 70,130,180     |                        |
    | <div style="display: inline; color:#800080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `purple` | :material-check: | #800080 | 128,0,128   |                        |
    | <div style="display: inline; color:#4B0082; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `indigo` | :material-check: | #4B0082 |  75,0,130   |                        |
    | <div style="display: inline; color:#9932CC; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `dark-orchid` | :material-check: | #9932CC |  153,50,204   |                        |
    | <div style="display: inline; color:#DDA0DD; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `plum` | :material-check: | #DDA0DD |  221,160,221   |                        |
    | <div style="display: inline; color:#E6E6FA; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `lavender` | :material-check: | #E6E6FA |  230,230,250   |                        |
    | <div style="display: inline; color:#FFC0CB; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `pink`               | :material-check: | #FFC0CB | 255,192,203 |                        |
    | <div style="display: inline; color:#FF00FF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `magenta`            | :material-check: | #FF00FF | 255,0,255   | This color is hideous. |
    | <div style="display: inline; color:#FFFF00; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `yellow`             | :material-check: | #FFFF00 | 255,255,0   |                        |
    | <div style="display: inline; color:#FFD700; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `gold`              | :material-check: | #FFD700 | 255,215,0     |                        |
    | <div style="display: inline; color:#DAA520; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `goldenrod`              | :material-check: | #DAA520 | 218,165,32     |                        |
    | <div style="display: inline; color:#F0E68C; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `khaki`              | :material-check: | #F0E68C | 218,165,32     |                        |
    | <div style="display: inline; color:#FFFACD; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `lemon-chiffon`              | :material-check: | #FFFACD | 255,250,205     |                        |
    | <div style="display: inline; color:#FFA500; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `orange`             | :material-check: | #FFA500 | 255,156,0   |                        |
    | <div style="display: inline; color:#A52A2A; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `brown`              | :material-check: | #A52A2A | 165,42,42   |                        |
    | <div style="display: inline; color:#00FFFF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `cyan`               | :material-check: | #00FFFF | 0,255,255   |                        |
    | <div style="display: inline; color:#808080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `gray`               | :material-check: | #808080 | 128,128,128 |                        |
    | <div style="display: inline; color:#C0C0C0; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `silver`              | :material-check: | #C0C0C0 | 192,192,192     |                        |
    | <div style="display: inline; color:#008080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `teal`              | :material-check: | #008080 | 0,128,128     |                        |
    | <div style="display: inline; color:#FFDAB9; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `peach`              | :material-check: | #FFDAB9 | 255,218,185     |                        |
    | <div style="display: inline; color:#FF7F50; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `coral`              | :material-check: | #FF7F50 | 255,127,80     |                        |


<!-- | Shortcut                                                                                                                                                                                                   |     Standard     |   HEX   |     RGB     |       Additional Notes |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:-------:|:-----------:|-----------------------:|
| <div style="display: inline; color:#FFFFFF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `white`              | :material-check: | #FFFFFF | 255,255,255 |                        |
| <div style="display: inline; color:#000000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `black`  | :material-check: | #000000 | 0,0,0       |                        |
| <div style="display: inline; color:8B0000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `dark-red`                | :material-check: | #8B0000 | 139,0,0     |                        |
| <div style="display: inline; color:#FF0000; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `red`                | :material-check: | #FF0000 | 255,0,0     |                        |
| <div style="display: inline; color:#DC143C; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `crimson`                | :material-check: | #DC143C | 220,20,60     |                        |
| <div style="display: inline; color:#B22222; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `firebrick`                | :material-check: | #B22222 | 178,34,34     |                        |
| <div style="display: inline; color:#00FF00; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `green`              | :material-check: | #FF0000 | 255,0,0     |                        |
| <div style="display: inline; color:#0000FF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `blue`               | :material-check: | #0000FF | 0,0,255     |                        |
| <div style="display: inline; color:#800080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `purple` | :material-check: | #800080 | 128,0,128   |                        |
| <div style="display: inline; color:#4B0082; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `indigo` | :material-check: | #4B0082 |  75,0,130   |                        |
| <div style="display: inline; color:#9932CC; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `dark-orchid` | :material-check: | #9932CC |  153,50,204   |                        |
| <div style="display: inline; color:#DDA0DD; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `plum` | :material-check: | #DDA0DD |  221,160,221   |                        |
| <div style="display: inline; color:#E6E6FA; -webkit-filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));filter: drop-shadow( 0px 0px 1px rgba(255, 255, 255, .7));">:material-circle:</div> `lavender` | :material-check: | #E6E6FA |  230,230,250   |                        |
| <div style="display: inline; color:#FFC0CB; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `pink`               | :material-check: | #FFC0CB | 255,192,203 |                        |
| <div style="display: inline; color:#FF00FF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `magenta`            | :material-check: | #FF00FF | 255,0,255   | This color is hideous. |
| <div style="display: inline; color:#FFFF00; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `yellow`             | :material-check: | #FFFF00 | 255,255,0   |                        |
| <div style="display: inline; color:#FFA500; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `orange`             | :material-check: | #FFA500 | 255,156,0   |                        |
| <div style="display: inline; color:#A52A2A; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `brown`              | :material-check: | #A52A2A | 165,42,42   |                        |
| <div style="display: inline; color:#00FFFF; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `cyan`               | :material-check: | #00FFFF | 0,255,255   |                        |
| <div style="display: inline; color:#808080; -webkit-filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));">:material-circle:</div> `gray`               | :material-check: | #808080 | 128,128,128 |                        | -->


### Filtered String (`string:f`)
Works the same as a [string](#string), except it filters the string for using input.

### Material
Expects a material (Enum.Material.{MaterialName}), e.g. `/command {MaterialName}`.

### User
A user ID or username, for example: `/command 655331725` or `/command @Wolf1te`.

<!-- ### Rank
A rank name or index.

### Team Color
A team color of a team in the game. -->

## Special Use-cases
### Two string parameters next to eachother.
If a command requires or can recieve 2 or more string paramaters consecutively, separate them with '||'. For example, `/ban @1Wolfite This is the reason||This is the moderator note`.