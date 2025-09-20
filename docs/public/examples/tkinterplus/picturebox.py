from tkinterplus import Picturebox
from PIL import Image
import os
import tkinter

PATH = os.getcwd()

root = tkinter.Tk()
root.title("Picture")
root.minsize(256, 256)

img = Image.open(os.path.join(PATH, "tests", "assets", "images", "sample.png"))
widget = Picturebox(
    root, image=img, bg="black", fg="white", text="Hello World", width=256, height=256
)
widget.pack()

root.mainloop()
