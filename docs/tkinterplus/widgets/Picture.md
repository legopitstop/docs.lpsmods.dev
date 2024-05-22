---
title: Picture
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Picture

## Parameters

| Name           | Type | Description |
| -------------- | ---- | ----------- |
| `master`       |      |             |
| `image`        |      |             |
| `width`        |      |             |
| `height`       |      |             |
| `text`         |      |             |
| `fg`           |      |             |
| `bg`           |      |             |
| `textvariable` |      |             |

## Methods

- [update](#update)
- [configure](#configure)

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
