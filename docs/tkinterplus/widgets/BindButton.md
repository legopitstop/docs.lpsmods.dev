---
title: BindButton | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# BindButton

## Parameters

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| `master`    | tkinter.Tk        |             |
| `variable`  | tkinter.StringVar |             |
| `seperator` | str               |             |
| `command`   | Callable          |             |

## Methods

- [callback](#callback)
- [listen](#listen)
- [get](#get)
- [set](#set)
- [configure](#configure)

### callback

#### Parameters

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| `e`  | tkinter.Event |             |

### listen

### get

### set

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `value` | str  |             |

### configure

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.BindButton(root)
widget.pack()
root.mainloop()
```
