---
title: localStorage | UserFolder
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
keywords: legopitstop,python,pypi,folder,easy,filemanagment,pythonpackage,userfolder
---

# localStorage

General storage class. Allows you to store key/values in the user folder. Sub-class of [Storage](/userfolder/Storage). Saves the file as `localStorage.yaml` in user folder.

## Parameters

| Name   | Description                                               |
| ------ | --------------------------------------------------------- |
| `user` | The [User](/userfolder/User) class for the local storage. |

## Methods

- [getItem](#getitem)
- [removeItem](#removeitem)
- [clear](#clear)
- [key](#key)
- [exist](#exist)
- [show](#show)

### getItem

### removeItem

### clear

### key

### exist

### show

## Example

```py
user = User('com.author.example_name')
local = localStorage(user)

local.setItem('version', '1.0.0')

version = local.getItem('version')
print(version)
```
