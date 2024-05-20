---
title: TabView
---

# TabView

::: warning
This widget is experimental
:::

## Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `master`   |      |             |
| `variable` |      |             |
| `bg`       |      |             |

## Methods

- [remove](#remove)
- [tab](#tab)
- [insert](#insert)
- [add](#add)
- [move](#move)
- [delete](#delete)
- [set](#set)
- [show_tab](#show_tab)
- [hide_tab](#hide_tab)
- [tagconfigure](#tagconfigure)
- [configure](#configure)

## Example

```py
import tkinter
from tkinterplus.experimental import TabView

root = tkinter.Tk()
widget = TabView(root)
widget.pack()
root.mainloop()
```
