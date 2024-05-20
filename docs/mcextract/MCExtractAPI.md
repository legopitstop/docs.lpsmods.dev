---
title: MCExtractAPI
---

# MCExtractAPI

## Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| `mcdirectory` | string  |             |
| `logger`      | boolean |             |

## Methods

- [accept_eula](#accept-eula)
- [get_docker](#get-docker)
- [extract](#extract)
- [generate](#generate)
- [map](#map)

## Example

```py
import mcextract

api = mcextract.MCExtractAPI()
api.extract("1.20.4/1.20.4.jar", True, True, accept_eula=False)
api.map("16.json", accept_eula=True)
api.generate("1.20.6", ['--client', '--server', '--reports'], accept_eula=True)
```
