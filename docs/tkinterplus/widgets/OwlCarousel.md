---
title: OwlCarousel
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# OwlCarousel <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name              | Type | Description |
| ----------------- | ---- | ----------- |
| `master`          |      |             |
| `bg`              |      |             |
| `fg`              |      |             |
| `nav`             |      |             |
| `dots`            |      |             |
| `items`           |      |             |
| `loop`            |      |             |
| `navText`         |      |             |
| `autoplay`        |      |             |
| `autoplayTimeout` |      |             |

## Methods

- [add_image](#add_image)
- [remove_image](#remove_image)
- [insert_image](#insert_image)
- [get_image](#get_image)
- [render](#render)
- [configure](#configure)
- [pack_configure](#pack_configure)
- [grid_configure](#grid_configure)
- [place_configure](#place_configure)

## Example

```py
import tkinter
from tkinterplus.experimental import OwlCarousel

root = tkinter.Tk()
widget = OwlCarousel(root)
widget.pack()
root.mainloop()
```
