---
title: LPSModsClient | lpsmods-api Documentation
---

# LPSModsClient

## Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| `username` | str  |             |
| `password` | str  |             |

## Methods

- [fetch_info](#fetch_info)

### `fetch_info`

Returns with info about this API.

## Example

```py
from lpsmods_api import LPSModsClient

api = LPSModsClient()
api.fetch_info()
```
