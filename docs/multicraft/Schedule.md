---
title: Schedule class | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `Schedule` class

## Parameters

| name           | type              | description |
| -------------- | ----------------- | ----------- |
| `id`           | int               |             |
| `name`         | str               |             |
| `server_id`    | id                |             |
| `scheduled_ts` | datetime.datetime |             |
| `last_run_ts`  | datetime.datetime |             |
| `interval`     | float             |             |
| `command`      | int               |             |
| `run_for`      | int               |             |
| `status`       | int               |             |
| `args`         | str               |             |
| `hidden`       | bool              |             |

## Methods

- [from_json](#from_json)

### `from_json`

**Return Type**: Schedule

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
