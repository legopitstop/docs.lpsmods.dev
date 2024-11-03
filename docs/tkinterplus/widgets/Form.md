---
title: Form Widget | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Form Widget

Construct a form widget with the parent MASTER.

## Parameters

| Name          | Type       | Description |
| ------------- | ---------- | ----------- |
| `parent`      | tkinter.Tk |             |
| `title`       | str        |             |
| `description` | str        |             |
| `tearoff`     | bool       |             |

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

### add_radio

Add multiple choice

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |

### add_checkbox

Add checkbox

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |

### add_dropdown

Add dropdown list

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |

### add_file

Add file upload

#### Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| `question`  | str  |             |
| `filetypes` | str  |             |
| `multiple`  | bool |             |
| `maxsize`   | int  |             |

### add_linear_scale

Add linear scale

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |
| `from_`    | int  |             |
| `to`       | int  |             |
| `start`    | int  |             |
| `end`      | int  |             |

### add_radio_grid

Add multiple choice grid

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |
| `row`      | int  |             |
| `column`   | int  |             |

### add_checkbox_grid

Add checkbox grid

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |
| `row`      | int  |             |
| `column`   | int  |             |

### add_short_answer

Add short answer

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |

### add_paragraph

Add paragraph

#### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `question` | str  |             |

### add_title

Add title and description

#### Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| `title`       | str  |             |
| `description` | str  |             |

### add_image

Add image

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `file`  | str  |             |
| `title` | str  |             |

### add_submit_button

Add submit button

#### Parameters

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `command` | Callable |             |

### add_reset_button

Add reset button

#### Parameters

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `command` | Callable |             |

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget = tkinterplus.Form(root)
widget.pack()
root.mainloop()
```
