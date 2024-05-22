---
title: BindButton
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# BindButton

## Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| `master`    |      |             |
| `variable`  |      |             |
| `seperator` |      |             |
| `command`   |      |             |

## Methods

- [callback](#callback)
- [listen](#listen)
- [get](#get)
- [set](#set)
- [configure](#configure)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.BindButton(root)
widget.pack()
root.mainloop()
```
