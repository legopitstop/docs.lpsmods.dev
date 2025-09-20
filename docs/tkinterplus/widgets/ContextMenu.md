---
title: ContextMenu Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
---

# ContextMenu Widget

Make a right click context menu.

## Parameters

| Name          | Type       | Description |
| ------------- | ---------- | ----------- |
| `master`      | tkinter.Tk |             |
| `showcommand` | Callable   |             |

## Methods

- [configure](#configure)
- [disable](#disable)
- [enable](#enable)
- [add_command](#add_command)

### `configure`

Config the context menu

### `disable`

Unbind context menu so it will not show

### `enable`

Bind the context menu so it will show

### `add_command`

Add command menu item. add type for a built-in command ie. type=ContextMenuType.COPY

## Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `label`   |      |             |
| `command` |      |             |
| `type`    |      |             |

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.ContextMenu(root)
widget.pack()
root.mainloop()
```
