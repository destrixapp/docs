---
title: /promptgamepass | Commands
icon: fontawesome/solid/money-bills
cmd_utility: true

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

---
# <p style="color: rgb(220,220,220); display: inline;">:fontawesome-solid-money-bills: Prompt Gamepass</p> (/prompt-gamepass)
<div style="display:inline;">
<p style="color: #7F5F02; display: inline;">Utility</p> | <p style="color: rgb(220,220,220); display: inline;">0/3</p> | <p style="color: rgb(180,180,180); display: inline;"> Added 0.1.2</p> | prompt-gamepass
</div>
PromptGamepass (/prompt-gamepass) responds differently based on permission levels.

## Permission Level: 0
Prompt a gamepass to yourself.

### Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| GamepassID | [number](../parameters.md#number) | :material-close: | 0     | The ID of the gamepass you want to prompt |

## Permission Level: 3
Prompt a gamepass to yourself or another player.

### Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| GamepassID | [number](../parameters.md#number) | :material-close: | 0     | The ID of the gamepass you want to prompt |
| Target | [player](../parameters.md#player) | :material-close: | @me     | The player's you want to toggle the command on. |

## See Also
* [:material-toy-brick-plus: /prompt-asset](./prompt-asset.md)