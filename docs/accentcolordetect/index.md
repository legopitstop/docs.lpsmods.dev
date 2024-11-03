---
title: accentcolordetect Documentation
description: The main application of this package is to detect the accent color from your GUI Python application and apply the needed adjustments to your interface.
keywords: legopitstop,python,windows,gui,darwin,pypi,tkinter,colordetect,pythonpackage
---

# accentcolordetect

This package allows you to detect the user's accent color on:

- macOS (untested)
- Windows 10+

The main application of this package is to detect the accent color from your GUI Python application and apply the needed adjustments to your interface. Inspired by the [darkdetect](https://pypi.org/project/darkdetect/) package by [Alberto Sottile](https://pypi.org/user/albertosottile/)

## Links

- :pie: [PyPI](https://pypi.org/project/accentcolordetect)
- :file_folder: [Download](https://github.com/legopitstop/accentcolordetect/releases)
- :gear: [Source Code](https://github.com/legopitstop/accentcolordetect)

## Installation

Install the module with pip:

```bat
pip3 install accentcolordetect
```

Update existing installation: `pip3 install accentcolordetect --upgrade`

## Usage

```python
import accentcolordetect

>>> accentcolordetect.accent()
((255, 140, 0), '#ff8c00')
```
