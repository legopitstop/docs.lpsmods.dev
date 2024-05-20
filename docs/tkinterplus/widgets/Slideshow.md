---
title: Slideshow
---

# Slideshow

::: warning
This widget is experimental
:::

## Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
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
