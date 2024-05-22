---
title: Modal
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Modal

## Parameters

| Name                  | Type | Description |
| --------------------- | ---- | ----------- |
| `master`              |      |             |
| `bg_color`            |      |             |
| `titlebar_bg_color`   |      |             |
| `titlebar_fg_color`   |      |             |
| `delete_window_state` |      |             |
| `hitbox`              |      |             |
| `padx`                |      |             |
| `pady`                |      |             |

## Methods

- [moveto](#moveto)
- [update](#update)
- [show](#show)
- [hide](#hide)
- [configure](#configure)
- [winfo_height](#winfo_height)
- [winfo_width](#winfo_width)
- [winfo_x](#winfo_x)
- [winfo_y](#winfo_y)
- [bind](#bind)
- [unbind](#unbind)
- [wm_maxsize](#wm_maxsize)
- [wm_geometry](#wm_geometry)
- [wm_iconbitmap](#wm_iconbitmap)
- [wm_protocol](#wm_protocol)
- [wm_title](#wm_title)
- [focus_set](#focus_set)
- [wm_overridedirect](#wm_overridedirect)
- [destroy](#destroy)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()

modal = Modal(root)
tkinter.Label(modal, text='Hello World').pack()

tkinter.Button(root, text='Open Modal', command=modal.show).pack()
root.mainloop()
```

![example-Modal](/images/example-Modal.png)
