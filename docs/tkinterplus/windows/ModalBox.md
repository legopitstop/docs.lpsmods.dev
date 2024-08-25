---
title: ModalBox | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ModalBox

## Methods

- [showinfo](#showinfo)
- [showwarning](#showwarning)
- [showerror](#showerror)
- [askquestion](#askquestion)
- [askokcancel](#askokcancel)
- [askyesno](#askyesno)
- [askyesnocancel](#askyesnocancel)
- [askretrycancel](#askretrycancel)

## Example

```py
import tkinter
from tkinterplus.modalbox import showinfo

root = tkinter.Tk()

def callback():
    showinfo('Title', 'Message', parent=root)

tkinter.Button(root, text='Open Modal', command=callback).pack()
root.mainloop()
```

![example-modalbox](/images/example-modalbox.png)
