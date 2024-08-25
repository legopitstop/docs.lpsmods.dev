---
title: Canvas3d | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Canvas3d <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `master` |      |             |

## Methods

- [find_coeffs](#find_coeffs)
- [bind_rotation](#bind_rotation)
- [bind_movement](#bind_movement)
- [controls](#controls)
- [delete](#delete)
- [create_arc](#create_arc)
- [create_bitmap](#create_bitmap)
- [create_image](#create_image)
- [create_line](#create_line)
- [create_oval](#create_oval)
- [create_polygon](#create_polygon)
- [create_rectangle](#create_rectangle)
- [create_text](#create_text)
- [create_window](#create_window)
- [create_face](#create_face)
- [draw](#draw)
- [get_items](#get_items)
- [show_origin](#show_origin)
- [move](#move)
- [rotate](#rotate)
- [grid_configure](#grid_configure)
- [pack_configure](#pack_configure)
- [place_configure](#place_configure)
- [configure](#configure)
- [bind](#bind)
- [tag_bind](#tag_bind)
- [tag_unbind](#tag_unbind)
- [tag_lower](#tag_lower)
- [tag_raise](#tag_raise)
- [itemconfigure](#itemconfigure)
- [after](#after)
- [raycast](#raycast)

## Example

```py
import tkinter
from tkinterplus.experimental import Canvas3d

root = tkinter.Tk()
widget = Canvas3d(root)
widget.pack()
root.mainloop()
```
