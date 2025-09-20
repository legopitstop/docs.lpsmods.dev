---
title: Config Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
---

# Config Class

Construct a config widget with the parent MASTER.

## Parameters

| Name             | Type       | Description |
| ---------------- | ---------- | ----------- |
| `master`         | tkinter.Tk |             |
| `title`          | str        |             |
| `prompt`         | str        |             |
| `confirmcommand` | Callable   |             |
| `icon`           | str        |             |
| `theme`          |            |             |

## Methods

- [get](#get)
- [add_string](#add_string)
- [add_boolean](#add_boolean)
- [add_integer](#add_integer)
- [add_float](#add_float)
- [add_enum](#add_enum)
- [add_filename](#add_filename)
- [add_directory](#add_directory)
- [add_color](#add_color)
- [add_object](#add_object)

### `get`

Returns an object containing the new config.

### `add_string`

Add a string option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_boolean`

Add a boolean (checkbox) option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_integer`

Add an integer option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `min`      | int  |             |
| `max`      | int  |             |
| `required` | bool |             |

### `add_float`

Add a float option to the config

#### Parameters

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| `name`     | str   |             |
| `label`    | str   |             |
| `min`      | float |             |
| `max`      | float |             |
| `required` | bool  |             |

### `add_enum`

Add an enum option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_filename`

Add a file option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_directory`

Add a directory option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_color`

Add a color option to the config

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

### `add_object`

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `name`     | str  |             |
| `label`    | str  |             |
| `required` | bool |             |

## Example

```py
import tkinter

root = tkinter.Tk()
root.mainloop()
```
