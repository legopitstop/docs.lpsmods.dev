---
title: Tweak Class | Tweaks & Stuff Plugin
description: Base tweak class.
---

# Tweak class

Base tweak class.

## Classes that extend Tweak

- [EditTweak](./EditTweak.md)
- [SelectTweak](./SelectTweak.md)
- [ToggleTweak](./ToggleTweak.md)

## Parameters

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| `id`          | string | ID of the tweak used for setting.       |
| `name`        | string | User friendly name for this setting.    |
| `author`      | string | The user who created this tweak.        |
| `description` | string | Description of this setting.            |
| `category`    | string | The category in settings.               |
| `condition`   | string | Conditions to match to show this tweak. |

## Methods

- [delete](#delete)
- [disable](#disable)
- [enable](#enable)
- [install](#install)
- [load](#load)
- [onInstall](#oninstall)
- [onLoad](#onload)
- [onUninstall](#onuninstall)
- [onUnload](#onunload)
- [setup](#setup)
- [uninstall](#uninstall)
- [unload](#unload)

### delete

Delete this tweak with its setting and deleteables.

### disable

Disable this tweak.

### enable

Enable this tweak.

### install

Install this tweak.

::: warning
Do not override! You should override [onInstall](#oninstall) instead.
:::

### load

Load this tweak.

### onInstall

Called when this plugin is installed.

### onLoad

Called when this tweak is loaded.

### onUninstall

Called when this plugin is uninstalled.

### onUnload

Called when this tweak is unloaded.

### uninstall

Uninstall this tweak.

::: warning
Do not override! You should override [onUninstall](#onuninstall) instead.
:::

### unload

Unload this tweak.

### setup

Called when this tweak is created.
