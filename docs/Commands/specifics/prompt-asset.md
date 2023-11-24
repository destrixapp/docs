---
title: /promptasset | Commands
icon: material/toy-brick-plus
cmd_utility: true

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

comments: true
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-toy-brick-plus: Prompt Asset</p> (/prompt-asset)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">0/3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | prompt-asset
</div>

PromptAsset (/prompt-asset) responds differently based on permission levels.

## Permission Level: 0
Prompt an asset to yourself.

### Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| AssetID | [number](../parameters.md#number) | :material-close: | 0     | The ID of the asset you want to prompt |

## Permission Level: 3
Prompt an asset to yourself or another player.

### Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| AssetID | [number](../parameters.md#number) | :material-close: | 0     | The ID of the asset you want to prompt |
| Target | [player](../parameters.md#player) | :material-close: | @me     | The player's you want to toggle the command on. |

## See Also
* [:fontawesome-solid-money-bills: /prompt-gamepass](./prompt-gamepass.md)