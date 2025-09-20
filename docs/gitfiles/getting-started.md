---
title: Getting Started | gitfiles Documentation
---

# Getting Started

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
