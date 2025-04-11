---
title: Java Class | mcpath Documentation
description: Java Edition facade.
---

# Java Class

Java Edition facade.

## Methods

### `launch`

Launches Minecraft.

### `get_runtime`

Get the path to the java runtime executable.

#### Parameters

| Name      | Type   | Description              |
| --------- | ------ | ------------------------ |
| `version` | string | The version of Minecraft |

```py
import mcpath
mcpath.java.get_runtime('1.21.3')
# C:\Users\USER\AppData\Local\Packages\Microsoft.4297127D64EC6_8wekyb3d8bbwe\LocalCache\Local\runtime\java-runtime-delta\windows-x64\java-runtime-delta\bin\java.exe
```

### `get_root_dir`

Get the path to the `.minecraft` folder.

### `get_game_dir`

Get the path to the game directory.

::: tip
If you want the `.minecraft` folder use get_root_dir instead.
:::

### `get_launcher`

Get the path to the Minecraft launcher.

### `get_versions_dir`

Get the path of the directory holding version jar files.

### `get_saves_dir`

Get the path of the directory holding world files.

### `get_resource_packs_dir`

Get the path of the directory holding resource pack files.

### `get_screenshots_dir`

Get the path of the directory holding screenshot files.

### `get_backups_dir`

Get the path of the directory holding world backups.

### `get_logs_dir`

Get the path of the directory holding game log files.

## Example

```py
import mcpath

print(mcpath.java.get_game_dir())
# C:\Users\USER\AppData\Roaming\.minecraft
```
