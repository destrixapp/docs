---
title: /hint | Commands
icon: material/message
cmd_utility: true

tags:
    - Commands
    - Utility

search:
    boost: 2

hide:
    - toc

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-message: Hint</p> (/h)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-utility); display: inline;">Utility</p> | <p style="color: var(--md-default-fg-color--light); display: inline;">3</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | hint, h
</div>

/hint (or /h for short), similar to [/message](./message.md), displays text at the top of all users' screens in the servers.

## Parameters

| Name   | Type   | Required         | Default | Description                            |
|:--------|:--------|:------------------:|:---------:|----------------------------------------:|
| Message | [string:f](../parameters.md#string) | :material-close: | "No message provided."     | The string you want to broadcast. |

## See Also
* [/message](./message.md)