---
title: Notification Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

::: warning
This widget is experimental
:::

# Notification Widget <Badge type="warning" text="Experimental" />

## Parameters

| Name           | Type | Description |
| -------------- | ---- | ----------- |
| `master`       |      |             |
| `text`         |      |             |
| `textvariable` |      |             |
| `state`        |      |             |
| `anchor`       |      |             |
| `bg`           |      |             |
| `fg`           |      |             |

## Methods

- [show](#show)
- [hide](#hide)
- [configure](#configure)

### `show`

UNDOCUMENTED

### `hide`

UNDOCUMENTED

### `configure`

UNDOCUMENTED

## Example

```py
import tkinter
from tkinterplus.experimental import Notification

root = tkinter.Tk()
widget = Notification(root)
widget.pack()
root.mainloop()
```
