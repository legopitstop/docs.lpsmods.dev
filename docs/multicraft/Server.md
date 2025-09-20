---
title: Server class | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `Server` class

## Parameters

| name        | type | description |
| ----------- | ---- | ----------- |
| `id`        | int  |             |
| `name`      | str  |             |
| `daemon_id` | int  |             |
| `ip`        | str  |             |
| `port`      | int  |             |
| `players`   | int  |             |
| `memory`    | int  |             |

## Methods

- [start](./MulticraftAPI#start-server)
- [stop](./MulticraftAPI#stop-server)
- [restart](./MulticraftAPI#restart-server)
- [kill](./MulticraftAPI#kill-server)
- [from_json](#from_json)

### `from_json`

**Return Type**: Server

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
