---
title: Slideshow
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Slideshow <Badge type="warning" text="Experimental" />

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

## Example

```py
import tkinter
from tkinterplus.experimental import SlideShow

root = tkinter.Tk()
widget = SlideShow(root)
widget.pack()
root.mainloop()
```
