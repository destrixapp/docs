---
tags:
    - Commands
title: All Commands
description: A full list of all the commands available on Destrix.
cmd_index: true
search:
  boost: 6
hide:
  - toc
  # - navigation
# alt + z

---
<!-- Destrix has a lot of new and exciting commands, this is a large list of what those commands are and what they do, by category. -->

Start exploring all of Destrix's commands. What would you like to start with?

<div class="grid cards" markdown>

<!-- -   <span style="display:inline; margin:0px; margin-block: 0px; color: #FFF !important">[:material-lightbulb:{ .lg .middle } __Utility__](./specifics/serverlock.md)</span> -->
-   [:material-lightbulb:{ .lg .middle } __Utility__](./specifics/server-lock.md){ style="color:var(--destrix-docs--commandcat-utility);" }

    ---

    General utility commands like [`/server-lock`](./specifics/server-lock.md), [`/change`](./specifics/change.md), [`/shutdown`](./specifics/shutdown.md), [`/message`](./specifics/message.md), [`/rank`](./specifics/rank.md) and much, much more.
    
    <br>
    [:octicons-arrow-right-24: View](./specifics/server-lock.md){ style="color:var(--destrix-docs--commandcat-utility);" }

-   [:material-block-helper:{ .lg .middle }&thinsp; __Moderation__](./specifics/ban.md){ style="color:var(--destrix-docs--commandcat-moderation);" }

    ---

    Commands that help you moderate and control your experience. Commands like [`/ban`](./specifics/ban.md), [`/server-ban`](./specifics/sban.md), [`/kick`](./specifics/kick.md), etc.

    [:octicons-arrow-right-24: View](./specifics/ban.md){ style="color:var(--destrix-docs--commandcat-moderation);" }

-   [:material-cog:{ .lg .middle } __Software__](./specifics/about.md){ style="color:var(--destrix-docs--commandcat-software);" }

    ---

    Commands that keep the cogs spinning and the software moving. Small shortcuts that make it easier and faster to navigate and use Destrix

    [:octicons-arrow-right-24: View](./specifics/about.md){ style="color:var(--destrix-docs--commandcat-software);" }

-   [:fontawesome-solid-fire-flame-curved:{ .lg .middle } __Fun__](./specifics/fire.md){ style="color:var(--destrix-docs--commandcat-fun);" }

    ---

    Commands for when you just want to light someone on fire, in a nice way.

    <br>
    [:octicons-arrow-right-24: View](./specifics/fire.md){ style="color:var(--destrix-docs--commandcat-fun);" }

-   [:material-calendar:{ .lg .middle } __Standard__](./specifics/fly.md){ style="color:var(--destrix-docs--commandcat-standard);" }

    ---

    Standard and common commands from other admin systems, all added to Destrix to make your experience simpler and more universal.

    [:octicons-arrow-right-24: View](./specifics/fly.md){ style="color:var(--destrix-docs--commandcat-standard);" }

-   [:octicons-sparkle-fill-16:{ .lg .middle } __Cosmetic__](./specifics/smoke.md){ style="color:var(--destrix-docs--commandcat-cosmetic);" }

    ---

    Commands that make your avatar look either hideous or awesome — I guess it's a matter of perspective

    <br>
    [:octicons-arrow-right-24: View](./specifics/smoke.md){ style="color:var(--destrix-docs--commandcat-cosmetic);" }

-   [:fontawesome-solid-palette:{ .lg .middle } __Customization__](./specifics/change-bloom.md){ style="color:var(--destrix-docs--commandcat-customization);" }

    ---

    Commands that make the experience look better, worse, or easier on your eyes.

    [:octicons-arrow-right-24: View](./specifics/change-bloom.md){ style="color:var(--destrix-docs--commandcat-customization);" }

-   [:material-hammer-wrench:{ .lg .middle } __Developer__](./specifics/change-camera-type.md){ style="color:var(--destrix-docs--commandcat-developer);" }

    ---

    Commands that are useful for developers and debugging.

    <br>
    [:octicons-arrow-right-24: View](./specifics/change-camera-type.md){ style="color:var(--destrix-docs--commandcat-developer);" }

-   [:fontawesome-solid-list:{ .lg .middle }&thinsp; __Rules__](./rules.md)

    ---
    Learn more about inputting commands.
    <br><br>

    [:octicons-arrow-right-24: View](./rules.md)

-   [:material-database:{ .lg .middle }&thinsp; __Parameters__](./parameters.md)

    ---

    Learn more about parameters, the types, and what they are and what they do.

    [:octicons-arrow-right-24: View](./parameters.md)

</div>

<div class="grid cards plus-highlight-grid-container" markdown>

  -   [:bootstrap-plus-circle-dotted:{ .lg .middle }&thinsp; __Plus__](?plus){ style="color:var(--destrix-docs--commandcat-plus);" }

      ---

      Subscribe to [:bootstrap-plus-circle-dotted: Destrix Plus](?plus) and gain access to every command Destrix has to offer. Exclusive commands have a plus icon next to them and have a "Plus" label.

      [:octicons-arrow-right-24: View](?plus)
</div>

<!-- | Command                                                 | Arguments     	| Category 	| Description                                                               	| Default Permission Level             	|
|:-------------------------------------------------------	|---------------	|:----------:	|:---------------------------------------------------------------------------	|:--------------------------------------:	|
| [/shutdown](./specifics/fshutdown)                                             	| _None_        	| Utility  	| Shuts down the current server.                                            	| <p style="text-align: center;">3</p> 	|
| /fshutdown <strong style = "color: #000;">\*</strong> 	| _None_        	| Utility  	| Shuts down the current server in 3 seconds or less.                       	| <p style="text-align: center;">4</p> 	|
| /serverlock, /slock                                   	| rank : number 	| Utility  	| Locks the current server from anyone trying to join below the rank given. 	| <p style="text-align: center;">4</p> 	|
| /tempserverlock, /tslock                                   	| rank : number, time : number 	| Utility  	| Locks the current server from anyone trying to join below the rank given. 	| <p style="text-align: center;">4</p> 	|
| /view, /spectate, /watch | player : player | Utility | Spectate a player. | <p style="text-align: center;">0</p> |
| <p style="color: rgb(255,255,255)">/reloadmap</p> /reloadworkspace | _None_ | Utility | Reloads the workspace. | <p style="text-align: center;">5</p> | -->

<!-- | Command | Parameters  | Category | Summary | Default Permission Level
| :--- | :---: | :---: | :--- | :---:
| [:material-block-helper: /ban](/Commands/specifics/ban) | _Player : player_, _Reason : string_, _Moderator Note : string_ | Utility | Ban a player. | 1 |

:fontawesome-solid-circle-info: This page takes a while to create, for now you can check the sidebar for all the commands. -->