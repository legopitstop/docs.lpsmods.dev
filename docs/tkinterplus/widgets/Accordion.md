---
title: Accordion Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
---

# Accordion Widget

Construct a collapsible container with a clickable header. Child widgets are placed inside the accordion body.

## Parameters

| Name                         | Type              | Description                                                |
|------------------------------|-------------------|------------------------------------------------------------|
| `master`                     | tkinter.Tk        | Parent widget.                                             |
| `text`                       | str               | Text shown in the accordion header.                        |
| `image`                      | str               | Optional image shown in the accordion header.              |
| `textvariable`               | tkinter.StringVar | Variable used for the header text.                         |
| `bg`                         | str               | Background color for the accordion body.                   |
| `background_header`          | str               | Background color for the header.                           |
| `disabled_foreground_header` | str               | Header text color when the widget is disabled.             |
| `active_background_header`   | str               | Header background color while active or hovered.           |
| `active_foreground_header`   | str               | Header text color while active or hovered.                 |
| `foreground_header`          | str               | Header text color.                                         |
| `show_icon`                  | str               | Icon shown when the accordion is expanded.                 |
| `hide_icon`                  | str               | Icon shown when the accordion is collapsed.                |
| `name`                       | str               | Value written to `variable` when this accordion is opened. |
| `variable`                   | tkinter.StringVar | Shared variable used to track which accordion is open.     |
| `state`                      | str               | Widget state, such as `normal` or `disabled`.              |
| `font`                       | str               | Header text font.                                          |

## Methods

- [configure](#configure)
- [update](#update)
- [show](#show)
- [hide](#hide)
- [grid_configure](#grid_configure)
- [place_configure](#place_configure)
- [pack_configure](#pack_configure)

### `configure`

Configure the accordion options.

### `update`

Update the displayed icons and header state.

### `show`

Expand the accordion.

### `hide`

Collapse the accordion.

### `grid_configure`

Position the accordion in the parent widget using grid options.

### `place_configure`

Place the accordion in the parent widget using absolute or relative placement options.

### `pack_configure`

Pack the accordion in the parent widget.

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

![example-Accordion](https://cdn.lpsmods.dev/data/docs/example-Accordion.webp)
