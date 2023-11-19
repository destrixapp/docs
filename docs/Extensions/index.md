---
tags:
    - Extensions
    - Themes
    - Plugins
    - Security
title: About
description: What are extenstions for Destrix.
search:
  boost: 9
---

# Extensions
Extensions are a great way to improve your Destrix experience for your experience. You can either create your own extensions, or you can view some extensions on the Destrix's Github. Click to view [Destrix Themes](https://github.com/orgs/DestrixApp/repositories?q=&type=all&language=css&sort=stargazers), or [Destrix Plugins](https://github.com/orgs/DestrixApp/repositories?q=&type=all&language=lua&sort=stargazers).

<!-- ???+ warning "Warning"

    The links provided display all repositories tagged with `destrix-plugin` or `destrix-theme`, which means **anyone** can add a repository. Make sure you trust what extensions you add. You can trust any `DestrixApp/` repository. -->

## How to add a theme to Destrix

Let's say you wanted to add the [_snowy_ theme](https://github.com/DestrixApp/snowy). That theme is published under the DestrixApp account, so you would need to add `DestrixApp/snowy` to the configuration.
```lua
  ...

  themes = {
    "DestrixApp/snowy";
    -- (1)
    -- (2)
  }

  ...
```

1. You can add your own themes here if the repo is public. `{github_username}`/`{repo_name}`
2. You can add multiple themes, but this may cause compatibility issues.

## How to add a plugin to Destrix

```lua
  ...

  plugins = {
    "DestrixApp/plugin";
  }

  ...
```

!!! danger "Responsibility"

    Plugins are uncontrolled and can pretty much do anything with your experience. To reduce risk, please make sure you trust the plugins that you are inserting and do not add plugins that other users tell you to. It is safe, however, to assume the plugins that are endorsed on [DestrixApp](https://github.com/DestrixApp) are safe to use. 
    
    <small>**_Destrix is not liable for the damage caused to you, your users, or your experience due to a malicious extension._**</small>


## Make your own extensions
Want to make your own extensions? [Click here to make a theme](./Themes/Creating/index.md), or [click here to make a plugin](./Plugins/Getting_Started.md).

<!-- # Elevate Your Experience with Destrix Extensions

## Understanding Extensions

Destrix Extensions are a powerful avenue to elevate the capabilities of Destrix, offering a myriad of customization options and enhancements. Whether you're looking to streamline workflows, enhance the style, or introduce new functionalities, extensions are the key.

## What Are Extensions?

In essence, extensions are modules, plugins, and themes designed to seamlessly integrate with Destrix. They serve as invaluable tools that extend the functionality of Destrix beyond its core features, allowing you to tailor the admin system to your specific needs.

## Exploring Possibilities

### Plugins
Explore a rich collection of plugins that cater to various use cases. From advanced moderation features to in-depth analytics, plugins empower you to fine-tune Destrix based on your game's unique requirements.

### Themes
Transform the visual appeal of Destrix with themes. Whether you prefer a sleek, minimalist design or a vibrant and immersive interface, themes let you customize the look and feel to align with your game's aesthetics.

## Where to Find Extensions

Visit our [GitHub](https://github.com/orgs/DestrixApp/repositories?q=theme&type=all&language=&sort=) to discover a curated collection of extensions. Explore, contribute, and leverage the creativity of the Destrix community to enhance your gaming experience.

## How to Get Started

1. **Exploration:** Browse through the available extensions on GitHub to discover a wide range of options.
2. **Installation:** Follow the installation instructions provided with each extension to seamlessly integrate it with your Destrix setup.
3. **Configuration:** Tailor the extension settings to align with your specific preferences and requirements.

## Join the Extension Ecosystem

Become part of the vibrant Destrix Extension community. Share your creations, seek advice, and collaborate with fellow developers to push the boundaries of what Destrix can achieve.

Elevate your admin experience, unleash creativity, and unlock new possibilities with Destrix Extensions!
 -->
