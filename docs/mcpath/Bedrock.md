---
title: Bedrock Class | mcpath Documentation
description: Bedrock Edition facade.
---

# Bedrock Class

Bedrock Edition facade.

## Methods

### `launch`

Launches Minecraft.

### `get_game_dir`

Get the path to the main Minecraft folder.

### `get_executable`

Get the path of the executable file.

### `get_worlds_dir`

Get the path of the directory holding world files.

### `get_world_templates_dir`

Get the path of the directory holding world template files.

### `get_resource_packs_dir`

Get the path of the directory holding resource pack files.

### `get_behavior_packs_dir`

Get the path of the directory holding behavior pack files.

### `get_skin_packs_dir`

Get the path of the directory holding skin pack files.

### `get_development_resource_packs_dir`

Get the path of the directory holding development resource pack files.

### `get_development_behavior_packs_dir`

Get the path of the directory holding development behavior pack files.

### `get_development_skin_packs_dir`

Get the path of the directory holding development skin pack files.

### `get_custom_skins_dir`

Get the path of the directory holding custom skin files.

### `get_screenshots_dir`

Get the path of the directory holding screenshot files.

### `get_logs_dir`

Get the path of the directory holding game log files.

## Example

```py
import mcpath

print(mcpath.bedrock.get_game_dir())
# C:\Users\USER\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang
```
