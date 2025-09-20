---
title: Getting Started | mcpath Documentation
---

# Getting Started

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
