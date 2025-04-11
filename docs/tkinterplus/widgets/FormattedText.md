---
title: FormattedText Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# FormattedText Widget <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name                        | Type | Description |
| --------------------------- | ---- | ----------- |
| `master`                    |      |             |
| `format`                    |      |             |
| `variable`                  |      |             |
| `controls`                  |      |             |
| `fg`                        |      |             |
| `bg`                        |      |             |
| `width`                     |      |             |
| `height`                    |      |             |
| `insertbackground`          |      |             |
| `selectbackground`          |      |             |
| `selectforeground`          |      |             |
| `button_bg`                 |      |             |
| `button_fg`                 |      |             |
| `button_activebackground`   |      |             |
| `button_activeforeground`   |      |             |
| `button_disabledbackground` |      |             |
| `button_width`              |      |             |
| `button_color`              |      |             |

## Methods

- [update](#update)
- [update_style](#update_style)
- [configure](#configure)
- [bind](#bind)
- [unbind](#unbind)
- [insert](#insert)
- [get](#get)
- [delete](#delete)

### `update`

UNDOCUMENTED

### `update_style`

UNDOCUMENTED

### `configure`

UNDOCUMENTED

### `bind`

UNDOCUMENTED

### `unbind`

UNDOCUMENTED

### `insert`

UNDOCUMENTED

### `get`

UNDOCUMENTED

### `delete`

UNDOCUMENTED

## Example

```py
import tkinter
from tkinterplus.experimental import FormatText

root = tkinter.Tk()
widget = FormatText(root)
widget.pack()
root.mainloop()
```
