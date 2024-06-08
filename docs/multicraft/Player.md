---
title: Player
head:
  - - meta
    - name: keywords
      content: legopitstop,python,minecraft,server,pypi,multicraft,minecraftserver,pythonpackage
---

# Player

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

- [from_json](#from-json)
