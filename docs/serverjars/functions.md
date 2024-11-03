---
title: Functions | serverjars Documentation
description: Download and fetch details about Minecraft server jars.
keywords: legopitstop,python,java,api,minecraft,pypi,bedrock,servers,pythonpackage,serverjars
---

# Functions

## register

Register this [SoftwareBuilder](./SoftwareBuilder).

## download_jar

Fetch a direct download link to a specific jar type with either the latest version or a specified one

### Parameters

| Name         | Type | Default      | Description                                                     |
| ------------ | ---- | ------------ | --------------------------------------------------------------- |
| `type`       | str  |              | The type of jar (vanilla, modded, etc..)                        |
| `category`   | str  |              | The category of jars (spigot, bukkit, paper, etc..)             |
| `fp`         | str  | `server.jar` | The destination file path.                                      |
| `version`    | str  | `latest`     | The version of the jar (don't provide for latest)               |
| `chunk_size` | int  | `1000000`    | Download the jar in chunks.                                     |
| `block`      | bool | `True`       | When true it will wait until the file has finished downloading. |

## fetch_all_types

All types and categories.

## fetch_all

Fetch details on the latest jar for a type

### Parameters

| Name       | Type | Description                                         |
| ---------- | ---- | --------------------------------------------------- |
| `type`     | str  | The type of jar (vanilla, modded, etc..)            |
| `category` | str  | The category of jars (spigot, bukkit, paper, etc..) |
| `max`      | int  | The max number of jars to fetch                     |

## fetch_details

Fetch the details of a single jar

### Parameters

| Name       | Type | Default  | Description                                                         |
| ---------- | ---- | -------- | ------------------------------------------------------------------- |
| `type`     | str  |          | The type of jar (vanilla, modded, etc..)                            |
| `category` | str  |          | The type of jars (servers, proxies, modded, etc..)                  |
| `version`  | str  | `latest` | The version of the jar (don't provide for latest), defaults to None |

## fetch_jar

Fetch the jar file.

### Parameters

| Name       | Type | Default  | Description                                                         |
| ---------- | ---- | -------- | ------------------------------------------------------------------- |
| `type`     | str  |          | The type of jar (vanilla, modded, etc..)                            |
| `category` | str  |          | The type of jars (servers, proxies, modded, etc..)                  |
| `version`  | str  | `latest` | The version of the jar (don't provide for latest), defaults to None |

## fetch_latest

Fetch details on the latest jar for a type

### Parameters

| Name       | Type | Description                                         |
| ---------- | ---- | --------------------------------------------------- |
| `type`     | str  | The type of jar (vanilla, modded, etc..)            |
| `category` | str  | The category of jars (spigot, bukkit, paper, etc..) |

## fetch_types

Fetch a list of the possible jar categories

### Parameters

| Name   | Type | Description                              |
| ------ | ---- | ---------------------------------------- |
| `type` | str  | The type of jar (vanilla, modded, etc..) |
