---
title: TextEditor Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# TextEditor Class

## Parameters

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| `master` | tkinter.Tk |             |

## Methods

- [exit](#exit)
- [open](#open)
- [set](#set)
- [delete](#delete)
- [get](#get)

### exit

### open

Reads, then applies the text from the file to the textarea

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `fp`   | str  |             |
| `mode` | str  |             |

### set

Set text in textarea

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `text` | str  |             |

### delete

Clears all text in textarea

### get

Get text inside textarea

## Example

```py
import tkinter

root = tkinter.Tk()
root.mainloop()
```
