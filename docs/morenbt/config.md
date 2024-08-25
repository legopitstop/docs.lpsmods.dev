---
title: Config
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Config

Config file is located storage `more_nbt:config`. use `/function more_nbt:config` to open the config UI in-game. This config storage is to store the settings that are set using the function UI in-game.

## Parameters

```txt
The root tag.
 ├ version: (int) The version of config.
 └ config:
   ├ debugLog: (boolean) When true it will give an output via the chat log. default: false
   └ on_use_reload: (boolean) When true you can use the `reload` item component. default: false
```

## Example

```snbt
{
  version: 1,
  config: {
    debugLog: false,
    on_use_reload: false
  }
}
```
