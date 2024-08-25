---
title: ScrolledFrame | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ScrolledFrame

Construct a scrolledframe widget with the parent MASTER.

## Parameters

| Name        | Type       | Description |
| ----------- | ---------- | ----------- |
| `container` | tkinter.Tk |             |
| `bg_color`  | str        |             |

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

### configure

ScrolledText

### pack_configure

Pack a widget in the parent widget.

### grid_configure

osition a widget in the parent widget in a grid.

### place_configure

Place a widget in the parent widget.

### destroy

Destroy this and all descendants widgets.

### bind_all

Bind to all widgets at an event SEQUENCE a call to function FUNC.

#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `sequence` | str      |             |
| `func`     | Callable |             |
| `add`      | bool     |             |

### unbind_all

Unbind for all widgets for event SEQUENCE all functions.

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `sequence` | str  |             |

### bind

Bind to this widget at event SEQUENCE a call to function FUNC.

#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `sequence` | str      |             |
| `func`     | Callable |             |
| `add`      | bool     |             |

### unbind

Unbind for this widget for event SEQUENCE the function identified with FUNCID.

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `sequence` | str  |             |
| `funcid`   | str  |             |

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
