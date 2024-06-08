---
title: Input
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Input

Construct an input widget with the parent MASTER.

## Parameters

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| `master` | tkinter.Tk |             |
| `type`   | str        |             |

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
widget1 = Input(root, type='text')
widget1.pack()

widget2 = Input(root, type='color')
widget2.pack()

widget3 = Input(root, type='password')
widget3.pack()

widget4 = Input(root, type='number')
widget4.pack()

widget5 = Input(root, type='file')
widget5.pack()

widget6 = Input(root, type='directory')
widget6.pack()
root.mainloop()
```

![example-Input](/images/example-Input.png)
