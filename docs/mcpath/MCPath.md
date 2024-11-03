---
title: MCPath Class | mcpath Documentation
description: desc
---

# MCPath Class

Base class for all Minecraft paths.

## Parameters

| Name                         | Type   | Description                                                            |
| ---------------------------- | ------ | ---------------------------------------------------------------------- |
| `edition`                    | string | The edition of Minecraft this path is from                             |
| `platform`                   | string | The current platform                                                   |
| `root`                       | string | Get the path to the main Minecraft folder.                             |
| `worlds`                     | string | Get the path of the directory holding world files.                     |
| `resource_packs`             | string | Get the path of the directory holding resource pack files.             |
| `behavior_packs`             | string | Get the path of the directory holding behavior pack files.             |
| `development_resource_packs` | string | Get the path of the directory holding development resource pack files. |
| `development_behavior_packs` | string | Get the path of the directory holding development behavior pack files. |
| `screenshots`                | string | Get the path of the directory holding screenshot files.                |

## Examples

```py
import mcpath

print(mcpath.java.worlds)
# C:\Users\<USER>\AppData\Roaming\.minecraft\saves

print(mcpath.bedrock.worlds)
# C:\Users\<USER>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```
