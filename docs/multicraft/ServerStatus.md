---
title: ServerStatus class | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `ServerStatus` class

## Parameters

| name             | type         | description |
| ---------------- | ------------ | ----------- |
| `status`         | Status       |             |
| `online_players` | int          |             |
| `max_players`    | int          |             |
| `players`        | list[Player] |             |

## Methods

- [from_json](#from_json)

### `from_json`

**Return Type**: ServerStatus

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
