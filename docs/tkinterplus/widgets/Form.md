---
title: Form
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Form

## Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| `parent`      |      |             |
| `title`       |      |             |
| `description` |      |             |
| `tearoff`     |      |             |

## Methods

- [add_radio](#add_radio)
- [add_checkbox](#add_checkbox)
- [add_dropdown](#add_dropdown)
- [add_file](#add_file)
- [add_linear_scale](#add_linear_scale)
- [add_radio_grid](#add_radio_grid)
- [add_checkbox_grid](#add_checkbox_grid)
- [add_short_answer](#add_short_answer)
- [add_paragraph](#add_paragraph)
- [add_title](#add_title)
- [add_image](#add_image)
- [add_submit_button](#add_submit_button)
- [add_reset_button](#add_reset_button)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.Form(root)
widget.pack()
root.mainloop()
```
