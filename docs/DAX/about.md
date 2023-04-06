# About DAX

## What is it?
The **Destrix API Module** (DAX, also referred to as DAXM) is module that helps scripts to easily interact with and control Destrix from the server side. Not to be confused with **DXCA**, the Destrix Client API Module.

## What can it do?
**DAX** can do basic tasks like disabling commands for certain permission levels, hiding the panel temporarily, etc.
### However, it can't...
* Modify user settings or data
* Listen to requests made by the client
* Modify settings that you have set in Configurations

## What should it be used for?
DAX should be used for UX (User Experience) improvements (i.e., hiding panels during loading screens and cutscenes, disabling commands that may break other scripts, etc.). You can also use DAX to get things like bans or command logs from it.

## Security (on your end)
It is highly encouraged that you minimise interactions with DAX through remote events fired by a client. Try detecting when a user is in an event on the server's side (i.e. when they enter a portal). If a remote event is required, then you can, but __never__ have a remote event that can disable anything for other players. Also delete any remote events interfacing with DAX if they are no longer fired by the client.

## Security (on our end)
Having DAX in your game is low-risk due to the fact that it mainly only interferes with itself and Destrix. If there are any bugs at all, please report them at [destrix.app/report](https://destrix.app/report?a=DAX) at your earliest convenience.