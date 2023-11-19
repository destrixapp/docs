---
title: /change-bloom | Commands
description: Change the bloom effect (if in use), otherwise this command will create a BloomEffect under Lighting.
icon: material/vector-arrange-below

tags:
    - Commands
    - Customization
    - Plus

search:
    boost: 2

hide:
    - toc

comments: true
status: plus
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-vector-arrange-below: Change Bloom</p> (/change-bloom)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-plus); display: inline;">Plus</p>,
<p style="color: var(--destrix-docs--commandcat-customization); display: inline;">Customization</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">0</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | change-bloom
</div>

!!! plus "Exclusive to Plus"

    This command is currently exclusive to plus subscribers for the foreseeable future.

Change the bloom effect (if in use), otherwise this command will create a [BloomEffect](https://create.roblox.com/docs/reference/engine/classes/BloomEffect) under Lighting.

## Parameters

| Name           | Type   | Required | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Intensity         | [number](../parameters.md#number) | :material-close:                                                                                                                                                                                    | 0                | Determines the additive blending intensity.                                |
| Size         | [number](../parameters.md#number) | :material-close:                                                                                                                                                                                    | 0                | Determines the radius of the bloom in pixels.                                |
| Threshold         | [number](../parameters.md#number) | :material-close:                                                                                                                                                                                    | 0                | Determines how bright a color must be before it blooms.                                |

<!-- ## See Also -->
<!-- * [Destrix Plus](/404.html) -->
<!-- * [:fontawesome-solid-ranking-star: /check-rank](/Commands/specifics/checkrank/) -->