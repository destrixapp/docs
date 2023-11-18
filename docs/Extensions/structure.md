---
title: Additional Extension Structure
description: How to add a changelog to your Destrix extension.

status: new
---

# Additional Structure
Add additional information to your extension. Compatible with plugins and themes.

???+ info

    This page assumes you have set up a repository for either a [theme](./Themes/Creating/index.md) or a [plugin](./Plugins/Getting_Started.md).

## Changelog &thinsp;:material-alert-decagram:{ .mdx-pulse title="Added on November 18, 2023" }
Add a changelog to your extensions.


=== "With"

    ![Fallback](https://cdn.wolfite.net/branding/wxroblox/v1/fallback-noimg.png)

=== "Without"

    ![Fallback](https://cdn.wolfite.net/branding/wxroblox/v1/fallback-noimg.png)

Adding/creating your own changelog is as simple as adding `changelog.json` to your repository.
An example below is how your changelog.json file should look:
```json
{
    "changelog_manifest_version": 1,
    "version": "1.0",
    "last_updated": "2023-11-18T08:38:55Z", // (1)

    "entries": [
        {
            "version": "0.9",
            "date": "2023-11-18T08:38:55Z",

            "title": "Log Name",
            "subtitle": "View the changelog",

            "summary": "Your full summary here. You can use basic markdown if you wish." // (2)
        }
    ]
}
```

1. Confused? This date is in ISO 8601 format. (e.g. `{year/yyyy}-{month/mm}-{day/dd}T{hour/hh}:{min/mm}:{sec/ss}Z`)
2. We support limited markdown for changelogs. We support `#` as well as `##`, `**bold text**`, `_italics_`, `***bold and italic text***`, `~~strike through~~` but not nested italics, tables, or anything else.