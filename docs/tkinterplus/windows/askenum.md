---
title: AskEnum
---

# AskEnum

## Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
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
