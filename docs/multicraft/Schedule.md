---
title: Schedule
head:
  - - meta
    - name: keywords
      content: legopitstop,python,minecraft,server,pypi,multicraft,minecraftserver,pythonpackage
---

# Schedule

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

- [from_json](#from-json)
