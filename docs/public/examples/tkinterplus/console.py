from tkinterplus import Console
import tkinter
import warnings

root = tkinter.Tk()
root.geometry("400x400")

widget = Console(root)
widget.pack(expand=1, fill="both")

print("Hello, World!")
warnings.warn("Hello, World!")

root.mainloop()
