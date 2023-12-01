---
title: /change-camera-type | Commands
description: Locally change your Camera.CameraType to the specified CameraType.
icon: material/camera
cmd_developer: true

tags:
    - Commands
    - Developer

search:
    boost: 2

hide:
    - toc

---
# <p style="color: var(--md-default-fg-color); display: inline;">:material-camera: Change Camera Type</p> (/change-camera-type)
<div style="display:inline;">
<p style="color: var(--destrix-docs--commandcat-developer); display: inline;">Developer</p>
| <p style="color: var(--md-default-fg-color--light); display: inline;">4</p> | <p style="color: var(--md-default-fg-color--light); display: inline;"> Added 0.1.2</p> | change-camera-type
</div>

Locally change your Camera.CameraType to the specified CameraType.

Arguments: _CameraType : enum/string?_

## Parameters

| Name           | Type   | Required | Default            | Description                                               |
|:----------------|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|:-----------------------------------------------------------|
| CameraType         | [enum/string?](../parameters.md#string) | :material-close:{ title="This parameter is not required." }                                                                                                                                                                                    | `Enum.CameraType.Custom`                | The type you want to change `workspace.CameraType` to the specified enum, if it is valid                              |


<!-- ## See Also -->
<!-- * [:material-airplane: /jupiter](/Commands/specifics/jupter/) -->
<!-- * [:material-airplane: /mars](/Commands/specifics/mars/) -->