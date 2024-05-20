---
title: Config
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
- [setItem](#setItem)
- [getItem](#getItem)
- [removeItem](#removeItem)

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
