from tkinterplus.experimental import Code
import tkinter

root = tkinter.Tk()
root.title("Code")
root.minsize(500, 500)

widget = Code(root)
widget.pack(expand=1, fill='both')

root.mainloop()
