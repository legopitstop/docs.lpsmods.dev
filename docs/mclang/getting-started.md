---
title: Getting Started | mclang Documentation
---

# Getting Started

## Installation

Install the module with pip:

```bat
pip3 install mclang
```

Update existing installation: `pip3 install mclang --upgrade`

## Features

- Read and write to `.lang` files
- Add translation support to your Python application.

## Examples

```Python
import mclang

lang = """
test=This is cool!
test2=It worked!
"""

doc = mclang.loads(lang)

print(doc.tl('test'))
# This is cool!
```
