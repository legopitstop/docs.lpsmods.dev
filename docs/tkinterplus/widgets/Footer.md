---
title: Footer
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
head:
  - - meta
    - name: keywords
      content: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# Footer

## Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `master` |      |             |
| `bg`     |      |             |

## Methods

- [add_button](#add_button)
- [remove_button](#remove_button)
- [configure_button](#configure_button)
- [configure](#configure)

## Example

```py
import tkinter
import tkinterplus

root = tkinter.Tk()
tkinter.Label(root, text='Hello World', bg='white').grid(row=0,column=0)
widget = tkinterplus.Footer(root)
widget.add_button(text='Close', command=root.destroy)
widget.grid(row=1,column=0)
root.configure(bg='white')
root.mainloop()
```

![example-Footer](/images/example-Footer.png)
