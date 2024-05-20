---
title: Audio
---

# Audio

::: warning
This widget is experimental
:::

## Parameters

| Name             | Type | Description |
| ---------------- | ---- | ----------- |
| `master`           |      |             |
| `controls`         |      |             |
| `state`            |      |             |
| `bg`               |      |             |
| `fg`               |      |             |
| `activebackground` |      |             |
| `activeforeground` |      |             |
| `troughcolor`      |      |             |
| `bordercolor`      |      |             |
| `borderwidth`      |      |             |

## Methods

- [update_time](#update_time)
- [open](#open)
- [volume_up](#volume_up)
- [volume_down](#volume_down)
- [volume_mute](#volume_mute)
- [play](#play)
- [stop](#stop)
- [pause](#pause)
- [unpause](#unpause)
- [seek](#seek)
- [toggle](#toggle)
- [configure](#configure)
- [bind](#bind)

## Example

```py
import tkinter
from tkinterplus.experimental import Audio

root = tkinter.Tk()
widget = Audio(root)
widget.pack()
root.mainloop()
```
