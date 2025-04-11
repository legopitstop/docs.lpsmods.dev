---
title: gitfiles Documentation
description: Load, filter and match .gitingore files.
keywords: legopitstop,python,minecraft,pypi,gitignore,pythonpackage
prev:
  text: GeyserMC
  link: /geysermc/
next:
  text: TkinterPlus
  link: /tkinterplus/
---

# gitfiles

Load, filter and match `.gitingore` files.

## Links

- :pie: [PyPI](https://pypi.org/project/gitfiles)
- :file_folder: [Download](https://github.com/legopitstop/gitfiles/releases)
- :gear: [Source Code](https://github.com/legopitstop/gitfiles)

## Installation

Install the module with pip:

```bat
pip3 install gitfiles
```

Update existing installation: `pip3 install gitfiles --upgrade`

## Examples

```Python
import gitfiles

gitfiles.load_gitignore()

print(gitfiles.match('file.so'))
```

```Python
import gitfiles

gitfiles.load_gitignore()

files = [
    '.venv',
    '.env',
    'app.py'
]
print(gitfiles.filter(files))
```
