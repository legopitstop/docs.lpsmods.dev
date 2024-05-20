---
title: Notification
---

::: warning
This widget is experimental
:::

# Notification

## Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| `master`       |      |             |
| `text`         |      |             |
| `textvariable` |      |             |
| `state`        |      |             |
| `anchor`       |      |             |
|`bg`           |      |             |
| `fg`           |      |             |

## Methods

- [show](#show)
- [hide](#hide)
- [configure](#configure)

## Example

```py
import tkinter
from tkinterplus.experimental import Notification

root = tkinter.Tk()
widget = Notification(root)
widget.pack()
root.mainloop()
```
