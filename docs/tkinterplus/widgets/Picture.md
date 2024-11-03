---
title: Picture Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Picture Widget

Construct a picture widget with the parent MASTER.

## Parameters

| Name           | Type              | Description |
| -------------- | ----------------- | ----------- |
| `master`       | tkinter.Tk        |             |
| `image`        | PIL.Image         |             |
| `width`        | int               |             |
| `height`       | int               |             |
| `text`         | str               |             |
| `fg`           | str               |             |
| `bg`           | str               |             |
| `textvariable` | tkinter.StringVar |             |

## Methods

- [update](#update)
- [configure](#configure)

### update

Clear canvas to redraw

### configure

Modify the widget

## Example

```py
from PIL import Image
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.Picture(root, Image.open('logo.png'))
widget.pack()
root.mainloop()
```

![example-Picture](/images/example-Picture.png)
