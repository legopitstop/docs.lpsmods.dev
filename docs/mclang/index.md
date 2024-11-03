---
title: mclang Documentation
description: Read and write to .lang files.
keywords: legopitstop,python,pypi,minecraft,paths,java,bedrock,preview,education,world,screenshots,resourcepacks,behaviorpacks
---

# mclang

Create or open Minecraft: Bedrock Edition .lang files.

## Links

- :pie: [PyPI](https://pypi.org/project/mclang)
- :file_folder: [Download](https://github.com/legopitstop/mclang/releases)
- :gear: [Source Code](https://github.com/legopitstop/mclang)

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
