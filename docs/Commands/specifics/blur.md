---
title: /blur | Commands
description: Blur a player's secreen using BlurEffect, size defaults to 20.
icon: material/blur
cmd_fun: true

tags:
    - Commands
    - Fun

search:
    boost: 2

hide:
    - toc

comments: true
---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-blur: Blur</p> (/blur)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-fun); display: inline;">Fun</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | blur
</div>

Blur a player's secreen using BlurEffect, size defaults to 20.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Victim         | [player](../parameters.md#player) | :material-close:                                                                                                                                                                                    | `@me`                | The player you want to blur                                |
| Size         | [number:i](../parameters.md#number) | :material-close:                                                                                                                                                                                    | nil                | The size of the blur                |

<!-- ## See Also -->
<!-- * [:material-airplane: /jupiter](/Commands/specifics/jupter/) -->
<!-- * [:material-airplane: /mars](/Commands/specifics/mars/) -->