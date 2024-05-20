---
title: mcextract
---

# mcextract

Extract assets and data from the Minecraft jar.

## Examples

### Run using the API

```py
import mcextract

api = mcextract.MCExtractAPI()
api.extract("1.20.4/1.20.4.jar", True, True, accept_eula=False)
api.map("16.json", accept_eula=True)
api.generate("1.20.6", ['--client', '--server', '--reports'], accept_eula=True)
```

### Run using CLI

```sh
mcextract extract 1.20.4/1.20.4.jar --assets --data -eula
mcextract map 16.json -eula
mcextract generate 1.20.6 --client --server --reports -eula
```
