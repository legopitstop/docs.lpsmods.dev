---
title: sessionStorage | UserFolder
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
keywords: legopitstop,python,pypi,folder,easy,filemanagment,pythonpackage,userfolder
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

| Name   | Description                                                |
| ------ | ---------------------------------------------------------- |
| `user` | The [User](/userfolder/User) class for the session storage |

## Methods

- [getItem](#getitem)
- [setItem](#setitem)
- [removeItem](#removeitem)
- [clear](#clear)
- [key](#key)
- [exists](#exists)
- [show](#show)

### getItem

### setItem

### removeItem

### clear

### key

### exists

### show
