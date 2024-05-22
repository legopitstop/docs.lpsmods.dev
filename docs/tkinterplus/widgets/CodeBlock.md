---
title: CodeBlock
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# CodeBlock <Badge type="warning" text="Experimental" />

::: warning
This widget is experimental
:::

## Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `master`   |      |             |
| `language` |      |             |

## Methods

- [set_language](#set_language)
- [load_extension](#load_extension)
- [closePairs](#closePairs)
- [format](#format)
- [contextMenu](#contextMenu)
- [add_format](#add_format)
- [insert](#insert)

## Example

```py
import tkinter
from tkinterplus.experimental import CodeBlock

root = tkinter.Tk()
widget = CodeBlock(root)
widget.pack()
root.mainloop()
```
