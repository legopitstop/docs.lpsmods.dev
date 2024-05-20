---
title: Storage
---

# Storage

Create a file to store key/value pairs.

## Example

```py
user = User('com.author.example_name')
store = Storage(user, 'store.yaml')

store.setItem('version', '1.0.0')

version = store.getItem('version')
print(version)
```

## Parameters

| Name | Description                                               |
| -------- | --------------------------------------------------- |
| `user`     | The [User](/userfolder/User) class for the storage. |
| `filename` | The name of the file to store all values.           |

## Methods

- [getItem](#getItem)
- [setItem](#setItem)
- [removeItem](#removeItem)
- [clear](#clear)
- [key](#key)
- [exists](#exists)
- [show](#show)
