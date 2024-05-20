---
title: Accordian
---

# Accordian

## Parameters

| Name                       | Type | Description |
| -------------------------- | ---- | ----------- |
| `master`                     |      |             |
| `text`                       |      |             |
| `image`                      |      |             |
| `textvariable`               |      |             |
| `bg`                         |      |             |
| `background_header`          |      |             |
| `disabled_foreground_header` |      |             |
| `active_background_header`   |      |             |
| `active_foreground_header`   |      |             |
| `foreground_header`          |      |             |
| `show_icon`                  |      |             |
| `hide_icon`                  |      |             |
| `name`                       |      |             |
| `variable`                   |      |             |
| `state`                      |      |             |
| `font`                       |      |             |

## Methods

- [configure](#configure)
- [update](#update)
- [show](#show)
- [hide](#hide)
- [grid_configure](#grid_configure)
- [place_configure](#place_configure)
- [pack_configure](#pack_configure)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.Accordian(root)
widget.pack()
root.mainloop()
```
