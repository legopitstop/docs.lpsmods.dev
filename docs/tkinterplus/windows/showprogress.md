---
title: ShowProgress Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ShowProgress Class

Construct a showprogress widget with the parent MASTER.

## Parameters

| Name              | Type       | Description |
| ----------------- | ---------- | ----------- |
| `master`          | tkinter.Tk |             |
| `title`           | str        |             |
| `label`           | str        |             |
| `value`           | float      |             |
| `max`             | float      |             |
| `completecommand` | Callable   |             |

## Methods

- [config](#config)
- [step](#step)
- [get](#get)

### `config`

Update the progressbar

#### Parameters

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| `master` | tkinter.Tk |             |
| `label`  | str        |             |
| `value`  | float      |             |
| `max`    | float      |             |

### `step`

Increments the value option by amount.

#### Parameters

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| `amount` | float |             |

### `get`

Returns the currrent value

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
