from tkinterplus import FileButton, DirectoryButton, ColorButton, BindButton
import tkinter

root = tkinter.Tk()
root.title("BindButton")
root.minsize(500, 500)


def callback():
    print(BUTTON1.get())
    print(BUTTON2.get())
    print(BUTTON3.get())
    print(BUTTON4.get())


BUTTON1 = tkinter.StringVar()
BUTTON2 = tkinter.StringVar()
BUTTON3 = tkinter.StringVar()
BUTTON4 = tkinter.StringVar()

button1 = FileButton(root, variable=BUTTON1, command=callback)
button2 = DirectoryButton(root, variable=BUTTON2, command=callback)
button3 = ColorButton(root, variable=BUTTON3, command=callback)
button4 = BindButton(
    root,
    variable=BUTTON4,
    command=callback,
    bindcommand=lambda e: callback,
    bind_all=True,
)

BUTTON1.set("C:/Users/1589l/Downloads/copper armor/copper_boots.png")
BUTTON2.set("C:/Users/1589l/Downloads/copper armor")
BUTTON3.set("SystemButtonFace")
BUTTON4.set("<Control-s>")

button1.pack()
button2.pack()
button3.pack()
button4.pack()

root.mainloop()
