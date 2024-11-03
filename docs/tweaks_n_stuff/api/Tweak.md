---
title: Tweak Class | Tweaks & Stuff Plugin
description: desc
---

# Tweak class

## Parameters

| Name          | Type   | Description                          |
| ------------- | ------ | ------------------------------------ |
| `id`          | string | ID of the tweak used for setting.    |
| `name`        | string | User friendly name for this setting. |
| `description` | string | Description of this setting.         |
| `category`    | string | The category in settings.            |

## Methods

- [load](#load)
- [onChange](#onchange)
- [install](#install)
- [uninstall](#uninstall)
- [enable](#enable)
- [disable](#disable)
- [delete](#delete)
- [onEnable](#onenable)
- [onDisable](#ondisable)
- [oninstall](#oninstall)
- [onuninstall](#onuninstall)

### load

When this tweak is first loaded.

### onChange

Callback used for this tweaks setting.

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `value` |      |             |

### install

Install this tweak.

::: warning
Do not override! You should override [onInstall](#oninstall) instead.
:::

### uninstall

Uninstall this tweak.

::: warning
Do not override! You should override [onUninstall](#onuninstall) instead.
:::

### enable

Enable this tweak.

::: warning
Do not override! You should override [onEnable](#onenable) instead.
:::

### disable

Disable this tweak.

::: warning
Do not override! You should override [onDisable](#ondisable) instead.
:::

### delete

Delete this tweak and its settings.

### onEnable

Override this method to add features when enabled.

### onDisable

Override this method to remove features when disabled.

### oninstall

Override this method to add features when installed.

### onuninstall

Override this method to remove features when uninstalled.
