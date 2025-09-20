---
title: Functions | molang Documentation
description: Molang to Python Translator & interpreter written in pure Python.
---

# Functions

## molang

Decorator function which converts this function to Molang.

### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `func` | Callable |             |

### Example

```Python
from molang import molang

@molang
def convert_to_molang(n):
    return n * 2
print(convert_to_molang)
# return t.n*2;
```

## run

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `fn`   | str  |             |
| `text` | str  |             |

## run_file

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `fp` | str  |             |
