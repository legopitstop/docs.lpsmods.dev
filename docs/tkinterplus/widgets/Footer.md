---
title: Footer Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Footer Widget

Construct a footer widget with the parent MASTER.

## Parameters

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| `master` | tkinter.Tk |             |
| `bg`     | str        |             |

## Methods

- [add_button](#add_button)
- [remove_button](#remove_button)
- [configure_button](#configure_button)
- [configure](#configure)

### add_button

Add a button to the footer

## Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `text` | str  |             |

### remove_button

Delete a button from the footer

## Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `index` | int  |             |

### configure_button

Update the buttons properties

## Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `index` | int  |             |

### configure

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
tkinter.Label(root, text='Hello World', bg='white').grid(row=0,column=0)
widget = tkinterplus.Footer(root)
widget.add_button(text='Close', command=root.destroy)
widget.grid(row=1,column=0)
root.configure(bg='white')
root.mainloop()
```

![example-Footer](/images/example-Footer.png)
