---
title: WebFrame | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# WebFrame <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name              | Type | Description |
| ----------------- | ---- | ----------- |
| `master`          |      |             |
| `src`             |      |             |
| `srcdoc`          |      |             |
| `width`           |      |             |
| `height`          |      |             |
| `allowfullscreen` |      |             |
| `sandbox`         |      |             |
| `cache`           |      |             |
| `context_menu`    |      |             |

## Methods

- [developer_tools](#developer_tools)
- [view_page_source](#view_page_source)
- [render](#render)
- [reload](#reload)
- [save](#save)
- [print](#print)
- [open_menu](#open_menu)
- [configure](#configure)
- [grid_configure](#grid_configure)
- [pack_configure](#pack_configure)
- [place_configure](#place_configure)

## Example

```py
import tkinter
from tkinterplus.experimental import WebFrame

root = tkinter.Tk()
widget = WebFrame(root)
widget.pack()
root.mainloop()
```
