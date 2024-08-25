---
title: Storage | UserFolder
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
keywords: legopitstop,python,pypi,folder,easy,filemanagment,pythonpackage,userfolder
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

| Name       | Description                                         |
| ---------- | --------------------------------------------------- |
| `user`     | The [User](/userfolder/User) class for the storage. |
| `filename` | The name of the file to store all values.           |

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
