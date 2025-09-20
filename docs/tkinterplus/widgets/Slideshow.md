---
title: Slideshow Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
---

# Slideshow Widget <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| `master`        |      |             |
| `images`        |      |             |
| `buttons`       |      |             |
| `button`        |      |             |
| `activecolor`   |      |             |
| `disabledcolor` |      |             |
| `width`         |      |             |
| `height`        |      |             |
| `state`         |      |             |
| `fg`            |      |             |
| `bg`            |      |             |

## Methods

- [next](#next)
- [previous](#previous)
- [configure](#configure)
- [start](#start)
- [stop](#stop)

### `next`

UNDOCUMENTED

### `previous`

UNDOCUMENTED

### `configure`

UNDOCUMENTED

### `start`

UNDOCUMENTED

### `stop`

UNDOCUMENTED

## Example

```py
import tkinter
from tkinterplus.experimental import SlideShow

root = tkinter.Tk()
widget = SlideShow(root)
widget.pack()
root.mainloop()
```
