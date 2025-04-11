---
title: ModalBox Class | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# ModalBox Class

## Methods

- [showinfo](#showinfo)
- [showwarning](#showwarning)
- [showerror](#showerror)
- [askquestion](#askquestion)
- [askokcancel](#askokcancel)
- [askyesno](#askyesno)
- [askyesnocancel](#askyesnocancel)
- [askretrycancel](#askretrycancel)

### `showinfo`

UNDOCUMENTEd

### `showwarning`

UNDOCUMENTEd

### `showerror`

UNDOCUMENTEd

### `askquestion`

UNDOCUMENTEd

### `askokcancel`

UNDOCUMENTEd

### `askyesno`

UNDOCUMENTEd

### `askyesnocancel`

UNDOCUMENTEd

### `askretrycancel`

UNDOCUMENTEd

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
