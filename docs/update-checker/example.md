---
title: Example | Update Checker Documentation
description: Check to see if you have the latest version of a pack installed.
---

# Example

```json
{
  "__comment": "This is a premium URL, premium features will be optionally loaded.",
  "$schema": "https://github.com/legopitstop/Update_Checker/blob/main/schema.json", // Use the JSON Schema
  "homepage": "https://example.com", // The homepage if the pack is out of date.
  "premium:description": {
    // Since this is a premium URL we can use premium features. Premium features will usually have the namespace "premium". Premium features are always optional.
    "title": "Example",
    "favicon": "deepslate_tiles",
    "theme": "deepslate_tiles"
  },
  "1.17": {
    // All changelogs for mc version 1.17
    "1.7.0": "This is the changelog that is from the JSON! * It provides some custom in-line formatting! \nLike the following: * bullets that use '*', '-', and '-' * replacement texts for example '{{HOMEPAGE}}' will return the homepage inside the JSON!",
    "1.6.0": "* 1.17.1-1.6.0"
  },
  "1.16": {
    // All changelogs for mc version 1.16
    "1.5.0": "* 1.16.5-1.5.0",
    "1.4.0": "* 1.16.5-1.4.0"
  },
  "promos": {
    "1.17-recommended": "1.7.0", // The recommended mod version for mc 1.17
    "1.17-latest": "1.7.0", // Note that right now (v1.0.0) of Update Checker does not use '-latest' but may be used in the future, for now just use '-recommended'
    "1.16-recommended": "1.5.0",
    "1.16-latest": "1.5.0"
  }
}
```
