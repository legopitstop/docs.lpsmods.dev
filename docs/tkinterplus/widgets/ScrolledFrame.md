---
title: ScrolledFrame
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ScrolledFrame

## Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| `container` |      |             |
| `bg_color`  |      |             |

## Methods

- [configure](#configure)
- [pack_configure](#pack_configure)
- [grid_configure](#grid_configure)
- [place_configure](#place_configure)
- [destroy](#destroy)
- [bind_all](#bind_all)
- [unbind_all](#unbind_all)
- [bind](#bind)
- [unbind](#unbind)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.ScrolledFrame(root)
for i in range(100):
    tkinter.Label(widget, text=f'Label {i}').pack()
widget.pack()
root.mainloop()
```

![example-ScrolledFrame](/images/example-ScrolledFrame.png)
