---
title: Tooltip
---

# Tooltip

::: warning
This widget is experimental
:::

## Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| `parent`       |      |             |
| `text`         |      |             |
| `textvariable` |      |             |
| `bg`           |      |             |
| `fg`           |      |             |
| `ipadx`        |      |             |
| `ipady`        |      |             |
| `state`        |      |             |
| `anchor`       |      |             |
| `x`            |      |             |
| `y`            |      |             |
| `borderwidth`  |      |             |
| `width`        |      |             |
| `height`       |      |             |
| `bordercolor`  |      |             |
| `delay`        |      |             |
| `follow`       |      |             |

## Methods

- [update](#update)
- [moveto](#moveto)
- [show](#show)
- [hide](#hide)
- [configure](#configure)
- [destroy](#destroy)

## Example

```py
import tkinter
from tkinterplus.experimental import Tooltip

root = tkinter.Tk()
widget = Tooltip(root)
widget.pack()
root.mainloop()
```
