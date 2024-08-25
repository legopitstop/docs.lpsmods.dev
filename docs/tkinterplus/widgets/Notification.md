---
title: Notification | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

::: warning
This widget is experimental
:::

# Notification <Badge type="warning" text="Experimental" />

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

## Example

```py
import tkinter
from tkinterplus.experimental import Notification

root = tkinter.Tk()
widget = Notification(root)
widget.pack()
root.mainloop()
```
