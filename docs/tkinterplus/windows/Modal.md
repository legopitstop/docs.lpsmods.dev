---
title: Modal Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Modal Class

Construct a modal widget with the parent MASTER."

## Parameters

| Name                  | Type       | Description |
| --------------------- | ---------- | ----------- |
| `master`              | tkinter.Tk |             |
| `bg_color`            | str        |             |
| `titlebar_bg_color`   | str        |             |
| `titlebar_fg_color`   | str        |             |
| `delete_window_state` | str        |             |
| `hitbox`              | bool       |             |
| `padx`                | int        |             |
| `pady`                | int        |             |

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

### `moveto`

Move the modal to a diffrent place. `int` the pos on the screen. `CENTER` center on the screen. `None` keep in the same pos.

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `x`     | int  |             |
| `y`     | int  |             |
| `error` | bool |             |

### `update`

Update with widgets properties

### `show`

Shows the modal

### `hide`

Closes the modal

### `configure`

### `winfo_height`

### `winfo_width`

### `winfo_x`

### `winfo_y`

### `bind`

Bind to this widget at event SEQUENCE a call to function FUNC.

#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `sequence` | str      |             |
| `func`     | Callable |             |
| `add`      | bool     |             |

### `unbind`

Unbind for this widget for event SEQUENCE the function identified with FUNCID.

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `sequence` | str  |             |
| `funcid`   | str  |             |

### `wm_maxsize`

Set max WIDTH and HEIGHT for this widget. If the window is gridded the values are given in grid units. Return the current values if None is given.

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `width`  | int  |             |
| `height` | int  |             |

## `wm_minsize`

Set min WIDTH and HEIGHT for this widget. If the window is gridded the values are given in grid units. Return the current values if None is given.

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `width`  | int  |             |
| `height` | int  |             |

### `wm_geometry`

Set geometry to NEWGEOMETRY of the form =widthxheight+x+y. Return current value if None is given.

#### Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| `newGeometry` | str  |             |

### `wm_iconbitmap`

Set bitmap for the iconified widget to BITMAP. Return the bitmap if None is given.

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `bitmap` | str  |             |

### `wm_protocol`

Bind function FUNC to command NAME for this widget. Return the function bound to NAME if None is given. NAME could be e.g. "WM_SAVE_YOURSELF" or "WM_DELETE_WINDOW".

#### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `name` | str      |             |
| `func` | Callable |             |

### `wm_title`

Set the title of this widget.

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `string` | str  |             |

### `focus_set`

### `wm_overridedirect`

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `boolean` | bool |             |

### `destroy`

Destroy this and all descendant widgets.

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
