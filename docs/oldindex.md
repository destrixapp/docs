---
title: Introduction
hide:
    - navigation

definitions:

  # Page title with site name
  - &page_title_with_site_name >-
    {%- if not page.is_homepage -%}
      {{ page.meta.get("title", page.title) }} - {{ config.site_name }}
    {%- else -%}
      {{ page.meta.get("title", page.title) }}
    {%- endif -%}

  # Page description
  - &page_description >-
    {{ page.meta.get("description", config.site_description) or "" }}

# Meta tags
tags:

  # Open Graph
  og:type: website
  og:title: *page_title_with_site_name
  og:description: *page_description
  og:image: "https://cdn.discordapp.com/attachments/786817739867947009/1169215778915102820/destrix_docs_og_img_large.png?ex=6554980c&is=6542230c&hm=8f7e60d7a63a1a98455c4e705441f1c054f84f26c9069ab9cf053a293dcfb9c6&"
  og:image:type: "{{ image.type }}"
  og:image:width: "960"
  og:image:height: "540"
  og:url: "{{ page.canonical_url }}"

  # Twitter
  twitter:card: summary_large_image
  twitter.title: *page_title_with_site_name
  twitter:description: *page_description
  twitter:image: "{{ image.url }}"
---

<!-- ![Destrix](https://docs.destrix.app/cdn/logo.png) -->
:octicons-info-16: Destrix is not created yet. This documentation is more of a concept, and shown demos are POC's.

# Welcome to Destrix Documentation

Welcome, developers! We’re thrilled to have you here. Destrix is your ultimate admin and moderation companion, specifically crafted with developers in mind. We understand the intricacies and challenges faced in building immersive, engaging, and safe gaming environments. That's why Destrix is engineered to be flexible, seamless, and non-disruptive, ensuring your game’s integrity while enhancing the user experience.

## Who We Are

Destrix is a developer-centric admin system forged to simplify and empower your Roblox development journey. We amalgamate efficiency, flexibility, and power to offer an intuitive interface and a rich set of functionalities that make admin tasks a breeze. Our tools are tailored to be non-intrusive, ensuring that the natural flow and design of your game remain untarnished.

## Key Features
* Adaptable: Easily customizable to fit the unique needs, challenges, and constraints of your game.
* Efficient: Execute admin and moderation tasks with speed and precision.
* Secure: Built with robust security protocols to safeguard your gaming environment.

## Explore

### [Commands](Commands/index.md)
Dive into our comprehensive list of commands, each designed to offer you unparalleled control and moderation power, ensuring that you’re always in command.

### [DAX](DAX/about.md)
The Destrix API Module (DAX, also referred to as DAXM) is module that helps scripts to easily interact with and control Destrix from the server side.

### [DAXI](DAXI/about.md)
Explore DAXI, where innovation meets intuition. A tool that’s not just about getting things done but about redefining what’s possible in the world of game moderation. A powerful tool for developers to integrate their own models and systems seamlessly with Destrix.

### [Extension Docs](Extensions/index.md)
Get the insights, guides, and tips you need to extend and enhance the capabilities of Destrix. Your journey to creating a safe, engaging, and immersive gaming world just got easier.

## Join The Community
Become part of a community of passionate, like-minded developers. Share, learn, collaborate, and innovate, as we together shape the future of gaming on Roblox.

Join on&thinsp;[ :simple-discord: Discord](https://destrix.app?to=discord)

Happy Developing!

Read our [Installation Guide](/Getting_Started) to quickly get Destrix for your games!