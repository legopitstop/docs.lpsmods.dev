---
title: Cache | UserFolder Documentation
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
---

# Cache

Cache any file.

## Parameters

| Parameter   | Type                     | Value                                                                                                 |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `id`        | string                   | The cache id. The default will be an integer starting from `0` and increases for each Cache instance. |
| `user`      | [User](/userfolder/User) | The userfolder to dump all cache files.                                                               |
| `root_path` | string                   | The main path to remove from file paths. by default, this is the user's path. "C:/Users/YOUR_NAME/"   |

## Methods

- [exists](#exists)
- [key](#key)
- [add_file](#add_file)
- [add_directory](#add_directory)
- [remove_file](#remove_file)
- [get_file](#get_file)

### `exists`

UNDOCUMENTED

### `key`

UNDOCUMENTED

### `add_file`

UNDOCUMENTED

### `add_directory`

UNDOCUMENTED

### `remove_file`

UNDOCUMENTED

### `get_file`

UNDOCUMENTED

## Example

```py
cache = UserFolder.Cache()
cache.add_file('example1.png')

file = cache.get_file('example1.png')
print(file)

img = Image.open(file)
img.show()
```
