---
title: Introduction to making themes
description: Themes for Destrix are a way to personalize Destirx for your experience, or your own theme for others to use. Get started making your own themes for Destrix.
tags:
    - Themes
search:
  boost: 3

---
# Introduction to Making Themes
Themes for Destrix are a way to personalize Destirx for your experience, or your own theme for others to use.

## Before you start
You can add a theme to your experience anytime. However, to become an endorsed theme, your theme must adhere to the [Destrix Theme Guidelines](Guidelines.md). You're theme also has to abide by the Roblox Community Guidelines and Roblox Terms Of Service. For safe keeping, please follow the guidelines reguardless. However, all themes must abide by the [Destrix Extensions Security Policy](../../extensions-security-policy.md).

---

## Create a new theme
To create a theme, 

1. Open Github (or create an account),
2. Go to Home, and next to "Top Repositories," click "New"
3. Under repository name, set it as anything.
4. Ensure the repository is public, and create it

### Requirements
(Mainfest V1)

Destrix will look for your `root.css` file, which contains all the settings and information for your theme.

---

## Variables

Themes use limited CSS currently. We use these variables:
``` css
:root {
  --destrix-main-bg-color: #111216; /* (1) */
  --destrix-main-fg-color: #1F2024; /* (2) */
  --destrix-main-text-color: #FFFFFF; /* (3) */
  --destrix-main-text-accent-color: #DCDCDC; /* (4) */

  --destrix-main-success-color: #6FF796; /* (0) */
  --destrix-main-error-color: #DC3545; /* (0) */
  --destrix-main-warning-color: #FFC107; /* (0) */
  --destrix-main-info-color: #0381FF; /* (0) */

  ...
}
```

1.  This is the main color used for the Destrix background. <br>**Light**: #NONE<br>**Dark**: #111216<br><br>--destrix-main-fg-color can also be referred to as --destrix-main-accent-color

If one of these are not specified, it while default to the current value. Click the :material-plus-circle: icon for the default value.

Additionally, we also use variables for the settings as well.

```css
:root {
  ...

  --destrix-ts-base: dark; /*(1)*/
  --destrix-ts-background-img: rblxid(0); /*(3)*/

  ...

  --destrix-manifest-version: 1; /*(2)*/
}
```

1. light/dark (What base does your theme use. Is it more light or more dark?)

If you want to be a lunatic and override a property via an instance name, you can doing this:

make it .overrides and a .txt file or even .env ffs idgaf