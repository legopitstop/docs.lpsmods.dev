---
title: sessionStorage
---

# sessionStorage

Similar to [localStorage](./localStorage) but gets cleared entrytime the program starts. Sub-class of [Storage](/userfolder/Storage). Saves the file in `.session/UUID.yaml` in the user folder.

## Example

```py
user = User('com.author.example_name')
session = sessionStorage(user)

session.setItem('version', '1.0.0')

version = session.getItem('version')
print(version)
```

## Parameters

| Name | Description                                                      |
| -------- | ---------------------------------------------------------- |
| `user`     | The [User](/userfolder/User) class for the session storage |

## Methods:

- [getItem](#getItem)
- [setItem](#setItem)
- [removeItem](#removeItem)
- [clear](#clear)
- [key](#key)
- [exists](#exists)
- [show](#show)
