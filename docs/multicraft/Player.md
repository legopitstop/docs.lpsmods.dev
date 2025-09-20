---
title: Player class | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `Player` class

## Parameters

| name         | type              | description |
| ------------ | ----------------- | ----------- |
| `id`         | int               |             |
| `name`       | str               |             |
| `server_id`  | int               |             |
| `level`      | int               |             |
| `lastseen`   | datetime.datetime |             |
| `banned`     | bool              |             |
| `op`         | bool              |             |
| `status`     | Status            |             |
| `ip`         | str               |             |
| `previps`    | str               |             |
| `quitreason` | str               |             |

## Methods

- [from_json](#from_json)

### `from_json`

**Return Type**: Player

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
