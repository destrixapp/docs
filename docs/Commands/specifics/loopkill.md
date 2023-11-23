---
title: /loopkill | Commands
icon: material/emoticon-dead
cmd_standard: true

tags:
    - Commands
    - Standard

search:
    boost: 2

hide:
    - toc

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-emoticon-dead: LoopKill</p> (/loopkill)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-standard); display: inline;">Standard</p> | <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | loopkill
</div>

Contiously kill a player after they respawn. This command cannot be undone.

## Parameters

| Name           | Type   | Required :material-information-outline:{ title="Most commands that specify required arguments sometimes still work without the argument being specified, or bring up a menu prompting an answer." } | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Victim         | [player](../parameters.md#player) | :material-close:                                                                                                                                                                                    | `@me`                | The player you want to set on fire                                |

## See Also
* [:material-refresh: /reset](./reset.md)
* [:material-emoticon-dead: /kill](./kill.md)