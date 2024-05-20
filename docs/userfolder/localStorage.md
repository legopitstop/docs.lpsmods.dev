---
title: localStorage
---

# localStorage

General storage class. Allows you to store key/values in the user folder. Sub-class of [Storage](/userfolder/Storage). Saves the file as `localStorage.yaml` in user folder.

## Parameters

| Name | Description                                                     |
| -------- | --------------------------------------------------------- |
| `user`     | The [User](/userfolder/User) class for the local storage. |

## Methods:

- [getItem](#getItem)
- [removeItem](#removeItem)
- [clear](#clear)
- [key](#key)
- [exist](#exist)
- [show](#show)

## Example

```py
user = User('com.author.example_name')
local = localStorage(user)

local.setItem('version', '1.0.0')

version = local.getItem('version')
print(version)
```
