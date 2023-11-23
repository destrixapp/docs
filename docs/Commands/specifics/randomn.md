---
title: /randomn | Commands
icon: octicons/number-16
cmd_software: true

tags:
    - Commands
    - Software

search:
    boost: 2

hide:
    - toc

status: new
comments: true
---
# <p style="color: var(--md-default-fg-color); display: inline;">:octicons-number-16: Randomn</p> (/randomn)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-software); display: inline;">Software</p> | <p style="color: var(--md-default-fg-color--light); display: inline;">0</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | randomn, random-num, random-number
</div>

/randomn (for random number) generates a random number from the specified range. If the range is not specified, it will default to 0-1,000.

| Name           | Type   | Required | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| Range Start       | [number](../parameters.md#number) | :material-close:                                                                                                                                                                                    | 0                | The starting range.                                |
| Range End         | [number](../parameters.md#number) | :material-close:                                                                                                                                                                                    | 1,000                | The ending range.                |
| Decimals | [boolean](../parameters.md#boolean) | :material-close:                                                                                                                                                                                    | false | Receive decimals?  |


<!-- ## See Also -->
<!-- * [Destrix Plus](/404.html) -->
<!-- * [:fontawesome-solid-ranking-star: /check-rank](/Commands/specifics/checkrank/) -->