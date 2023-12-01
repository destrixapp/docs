---
title: DeclareIntegration - DAXI
# description: DisableEXEType is the function responsible for disable commands by type. Rather than disabling individual commands, you can disable them by type.
search:
  boost: 2
---
# <p style="color: var(--md-default-fg-color); display: inline;">:fontawesome-solid-plug: DAXI</p>:DeclareIntegration

Use this function to declare an integration for Destrix.

## Try it
### Parameters
| Name         	| Type   	| Default  	| Description                                                                                            	|
|:--------------	|:--------:	|:----------:	|--------------------------------------------------------------------------------------------------------:	|
| Integration Name 	| string 	| :material-check: 	| The name of the integration. This will be shown to users. Spaces will be filtered.                                                                	|
| Icon      	| string 	| :material-close:      	| The icon displayed along with the name in some areas. 	|

### Examples

The example below will register an integration and return it.

``` lua
DAXI.v1:DeclareIntegration("WOS", "rbxassetid://13321889811")
```