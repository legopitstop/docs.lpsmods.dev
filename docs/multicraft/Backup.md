---
title: Backup class | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `Backup` class

## Parameters

| name      | type              | description |
| --------- | ----------------- | ----------- |
| `status`  | BackupStatus      |             |
| `ftp`     | str               |             |
| `message` | str               |             |
| `file`    | str               |             |
| `time`    | datetime.datetime |             |

## Methods

- [from_json](#from_json)

### `from_json`

**Return Type**: Backup

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
