---
title: User | UserFolder Documentation
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
---

# User

Will create the file path inside the Users folder. Your id should be a unique string just for your script.

## Parameters

| argument       | value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| `id`           | The unique id just for this package. Must match regex: `[^a-z._\-0-9]` |
| `setupcommand` | callback function                                                      |
| `path`         | Path to the user folder. default "C:/Users/NAME/.python/ID"            |

## Example

```py
def setup_event(u: User):
    print('Download all required files')
    u.download('https://github.com/legopitstop/UserFolder/archive/refs/tags/v1.0.2.zip', 'temp.zip')
    u.unarchive('temp.zip')

user = User('com.author.example_name', setup_event)
user.show()
```

## Methods

- [join](#join)
- [uninstall](#uninstall)
- [exists](#exists)
- [open](#open)
- [listdir](#listdir)
- [show](#show)
- [get](#get)
- [Download](#download)
- [unarchive](#unarchive)

### `join`

UNDOCUMENTED

### `uninstall`

UNDOCUMENTED

### `exists`

UNDOCUMENTED

### `open`

UNDOCUMENTED

### `listdir`

UNDOCUMENTED

### `show`

UNDOCUMENTED

### `get`

UNDOCUMENTED

### `download`

UNDOCUMENTED

### `unarchive`

UNDOCUMENTED
