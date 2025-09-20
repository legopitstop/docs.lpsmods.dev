---
title: Getting Start | lpsmods-api Documentation
---

# Getting Started

## Installation

Install the module with pip:

```bat
pip3 install lpsmods-api
```

Update existing installation: `pip3 install lpsmods-api --upgrade`

## Examples

```Python
from lpsmods_api import LPSModsClient

api = LPSModsClient()
api.fetch_info()
```
