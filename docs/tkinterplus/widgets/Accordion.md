---
title: Accordian Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

<!-- TODO: Add type & desc from  https://github.com/legopitstop/tkinterplus/tree/main/tkinterplus/widgets -->

# Accordian Widget

## Parameters

| Name                         | Type              | Description |
| ---------------------------- | ----------------- | ----------- |
| `master`                     | tkinter.Tk        |             |
| `text`                       | str               |             |
| `image`                      | str               |             |
| `textvariable`               | tkinter.StringVar |             |
| `bg`                         | str               |             |
| `background_header`          | str               |             |
| `disabled_foreground_header` | str               |             |
| `active_background_header`   | str               |             |
| `active_foreground_header`   | str               |             |
| `foreground_header`          | str               |             |
| `show_icon`                  | str               |             |
| `hide_icon`                  | str               |             |
| `name`                       | str               |             |
| `variable`                   | str               |             |
| `state`                      | str               |             |
| `font`                       | str               |             |

## Methods

- [configure](#configure)
- [update](#update)
- [show](#show)
- [hide](#hide)
- [grid_configure](#grid_configure)
- [place_configure](#place_configure)
- [pack_configure](#pack_configure)

### `configure`

### `update`

updates the icons

### `show`

Expand the accordion

### `hide`

Shrink the accordion

### `grid_configure`

### `place_configure`

### `pack_configure`

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.Accordion(root, text='Accordion')
tkinter.Label(widget, text='Hello World').pack()
widget.pack()
root.mainloop()
```

![example-Accordion](/images/example-Accordion.png)
