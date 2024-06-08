---
title: Functions
head:
  - - meta
    - name: keywords
      content: legopitstop,python,java,api,minecraft,pypi,bedrock,servers,pythonpackage,serverjars
---

# Functions

## download_jar

Fetch a direct download link to a specific jar type with either the latest version or a specified one

### Parameters

| Name         | Type | Description                                                                      |
| ------------ | ---- | -------------------------------------------------------------------------------- |
| `category`   | str  | The category of jars (spigot, bukkit, paper, etc..)                              |
| `fp`         | str  | The destination file path., defaults to None                                     |
| `version`    | str  | The version of the jar (don't provide for latest), defaults to None              |
| `block`      | bool | When true it will wait until the file has finished downloading, defaults to True |
| `chunk_size` | int  | Download the jar in chunks, defaults to 1                                        |

## fetch_latest

Fetch details on the latest jar for a type

### Parameters

| Name       | Type | Description                                         |
| ---------- | ---- | --------------------------------------------------- |
| `category` | str  | The category of jars (spigot, bukkit, paper, etc..) |

## fetch_all

Fetch details on the latest jar for a type

### Parameters

| Name       | Type | Description                                         |
| ---------- | ---- | --------------------------------------------------- |
| `category` | str  | The category of jars (spigot, bukkit, paper, etc..) |

## fetch_types

Fetch a list of the possible jar categories

### Parameters

| Name   | Type | Description                                                                                                      |
| ------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| `type` | str  | The type of jars (bedrock, proxies, servers, etc...). Leave empty to see the list of all types, defaults to None |

## fetch_details

Fetch the details of a single jar

### Parameters

| Name       | Type | Description                                                         |
| ---------- | ---- | ------------------------------------------------------------------- |
| `category` | str  | The type of jars (servers, proxies, modded, etc..)                  |
| `version`  | str  | The version of the jar (don't provide for latest), defaults to None |
