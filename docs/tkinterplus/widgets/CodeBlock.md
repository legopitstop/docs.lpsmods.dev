---
title: CodeBlock Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# CodeBlock Widget <Badge type="warning" text="Experimental" />

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

### `set_language`

UNDOCUMENTED

### `load_extension`

UNDOCUMENTED

### `closePairs`

UNDOCUMENTED

### `format`

UNDOCUMENTED

### `contextMenu`

UNDOCUMENTED

### `add_format`

UNDOCUMENTED

### `insert`

UNDOCUMENTED

## Example

```py
import tkinter
from tkinterplus.experimental import CodeBlock

root = tkinter.Tk()
widget = CodeBlock(root)
widget.pack()
root.mainloop()
```
