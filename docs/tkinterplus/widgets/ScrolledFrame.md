---
title: ScrolledFrame
---

# ScrolledFrame

## Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
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
widget.pack()
root.mainloop()
```
