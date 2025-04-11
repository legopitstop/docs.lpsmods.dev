---
title: mcpath Documentation
description: Get paths to Minecraft Java, Bedrock, Preview, and Education Edition folders.
keywords: legopitstop,python,pypi,minecraft,paths,java,bedrock,preview,education,world,screenshots,resourcepacks,behaviorpacks
---

# mcpath

Get paths to Minecraft Java, Bedrock, Preview, and Education Edition folders.

## Links

- :pie: [PyPI](https://pypi.org/project/mcpath)
- :file_folder: [Download](https://github.com/legopitstop/mcpath/releases)
- :gear: [Source Code](https://github.com/legopitstop/mcpath)

## Installation

Install the module with pip:

```bat
pip3 install mcpath
```

Update existing installation: `pip3 install mcpath --upgrade`

## Supported Platforms

|             | Java | Bedrock | Preview/Beta | Education |
| ----------- | ---- | ------- | ------------ | --------- |
| **Android** | ❌   | ✅      | ❌           | ❌        |
| **Darwin**  | ✅   | ✅      | ❌           | ❌        |
| **iOS**     | ❌   | ✅      | ✅           | ✅        |
| **Linux**   | ✅   | ✅      | ❌           | ❌        |
| **Windows** | ✅   | ✅      | ✅           | ✅        |

## Examples

```Python
import mcpath

print(mcpath.java.get_saves_dir())
# C:\Users\USER\AppData\Roaming\.minecraft\saves
```
