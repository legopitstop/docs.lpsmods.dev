---
title: AskEnum
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# AskEnum

## Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `master`  |      |             |
| `title`   |      |             |
| `prompt`  |      |             |
| `default` |      |             |
| `value`   |      |             |

## Example

```py
import tkinter

def callback():
  print('Hello World')

root = tkinter.Tk()
tkinter.Button(root, text='askenum', command=callback).pack()
root.mainloop()
```
