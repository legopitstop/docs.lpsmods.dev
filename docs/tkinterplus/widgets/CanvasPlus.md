---
title: CanvasPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# CanvasPlus <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `master` |      |             |

## Methods

- [create_window](#create_window)

## Example

```py
import tkinter
from tkinterplus.experimental import CanvasPlus

root = tkinter.Tk()
widget = CanvasPlus(root)
widget.pack()
root.mainloop()
```
