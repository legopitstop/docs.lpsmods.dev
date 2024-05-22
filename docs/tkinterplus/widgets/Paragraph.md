---
title: Paragraph
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Paragraph <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| name           | type | description |
| -------------- | ---- | ----------- |
| `master`       |      |             |
| `variable`     |      |             |
| `type`         |      |             |
| `bg_color`     |      |             |
| `fg_color`     |      |             |
| `border_width` |      |             |
| `border_color` |      |             |

## Methods

- [update](#update)
- [load_document](#load_document)
- [load_format](#load_format)
- [format](#format)
- [configure](#configure)
- [insert](#insert)
- [delete](#delete)
- [get](#get)

## Example

```py
import tkinter
from tkinterplus.experimental import Paragraph

root = tkinter.Tk()
widget = Paragraph(root)
widget.pack()
root.mainloop()
```
