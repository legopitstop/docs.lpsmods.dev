---
title: User | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
---

# `User` class

## Parameters

| name           | type | description |
| -------------- | ---- | ----------- |
| `id`           | int  |             |
| `name`         | str  |             |
| `email`        | str  |             |
| `global_role`  | str  |             |
| `lang`         | str  |             |
| `theme`        | str  |             |
| `gauth_secret` | str  |             |
| `gauth_token`  | str  |             |
| `timezone`     | str  |             |

## Methods

- [from_json](#from_json)

### `from_json`

**Return Type**: User

#### Parameters

| name   | type | description |
| ------ | ---- | ----------- |
| `data` | dict |             |
