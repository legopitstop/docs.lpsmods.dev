---
title: AskEnum Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# AskEnum Class

Construct a askenum widget with the parent MASTER.

## Parameters

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| `master`  | tkinter.Tk |             |
| `title`   | str        |             |
| `prompt`  | str        |             |
| `default` | str        |             |
| `value`   | list       |             |

## Example

```py
import tkinter

def callback():
  print('Hello World')

root = tkinter.Tk()
tkinter.Button(root, text='askenum', command=callback).pack()
root.mainloop()
```
