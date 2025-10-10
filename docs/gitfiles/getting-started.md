---
title: Getting Started | gitfiles Documentation
---

# Getting Started

## Installation

<PythonInstallation project="gitfiles" />

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
