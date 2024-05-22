---
title: ShowProgress
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ShowProgress

## Parameters

| Name              | Type | Description |
| ----------------- | ---- | ----------- |
| `master`          |      |             |
| `title`           |      |             |
| `label`           |      |             |
| `value`           |      |             |
| `max`             |      |             |
| `completecommand` |      |             |

## Methods

- [config](#config)
- [step](#step)
- [get](#get)

## Example

```py
import tkinter

root = tkinter.Tk()
def callback():
    tkinterplus.ShowProgress(root, title='Title', label='Message', value=100, max=100)

tkinter.Button(root, text='Open Modal', command=callback).pack()
root.mainloop()
```

![example-showprogress](/images/example-showprogress.png)
