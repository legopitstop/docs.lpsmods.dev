---
title: Config | UserFolder
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
keywords: legopitstop,python,pypi,folder,easy,filemanagment,pythonpackage,userfolder
---

# Config

General config file for the program settings. Saves the file as `.cfg` in the user folder.

## Arguments

| argument  | value                                             |
| --------- | ------------------------------------------------- |
| `user`    | The [User](/userfolder/User) class for the config |
| `section` | The configs section. default value; DEFAULT       |

## Methods

- [section](#section)
- [setItem](#setitem)
- [getItem](#getitem)
- [removeItem](#removeitem)

### section

### setItem

### getItem

### removeItem

## Example

```py
user = User('com.author.example_name')
default = Config(user)

# fallback values
default.setItem('version', '1.0.0')
default.setItem('imissing', 'Hello World')

# set config value
config = default.section('config')
config.setItem('version', '2.3.0')

# Get
print(config.getItem('version'))
print(config.getItem('imissing'))

>> 2.3.0
>> Hello World
```
