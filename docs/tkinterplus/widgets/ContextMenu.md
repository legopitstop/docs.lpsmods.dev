---
title: ContextMenu
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ContextMenu

## Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| `master`      |      |             |
| `showcommand` |      |             |

## Methods

- [configure](#configure)
- [disable](#disable)
- [enable](#enable)
- [add_command](#add_command)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.ContextMenu(root)
widget.pack()
root.mainloop()
```
