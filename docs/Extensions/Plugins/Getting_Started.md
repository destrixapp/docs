---
title: Getting Started
description: What are plugins for Destrix and what can they do?   
---

# Introduction to Making Plugins

Plugins are an awesome way to increase the efficiency of Destrix for your experience. Sometimes Destrix may not have a functionality you or your admins/mods want. To fix this, you can either create your own plugin (in this tutorial) or browse some of the already existing plugins.

!!! danger "Responsibility"

    Plugins are uncontrolled and can pretty much do anything with your experience. To reduce risk, please make sure you trust the plugins that you are inserting and do not add plugins that other users tell you to. It is safe, however, to assume the plugins that are endorsed on [DestrixApp](https://github.com/DestrixApp) are safe to use. 
    
    <small>**_Destrix is not liable for the damage caused to you, your users, or your experience due to a malicious extension._**</small>

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

Destrix will look for your [`manifest.json`](../manifest/v1.md) file, which contains all the information about your extension, click here for more information for a valid [manifest](../manifest/v1.md).

## Supported Files
- [`manifest.json`](../manifest/v1.md)
- `main.luau`: Initiates after Destrix is fully loaded.

### Structure
``` { .sh .no-copy }
.
├─ manifest.json
├─ main.luau
...
```
<!-- 
│  └─ stylesheets/
│     └─ extra.css
└─ mkdocs.yml -->

## Built-in variables

<!-- - `_G.Destrix.Client.` -->
- `none`

## How it works
Your script is loaded via loadstring and parented to ServerScriptService.

???+ info "Limitations"

    Plugins can not use `DataStoreService`, `loadstring`, `require()`, or `getfenv` (nor `setfenv`).





???+ tip "Additional Settings"

    Want to add a changelog or more? Check out the [Additional Structure reference](../structure.md).