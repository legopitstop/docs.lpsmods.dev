---
title: Server
head:
  - - meta
    - name: keywords
      content: legopitstop,python,minecraft,server,pypi,multicraft,minecraftserver,pythonpackage
---

# Server

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
