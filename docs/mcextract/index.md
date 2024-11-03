---
title: mcextract Documentation
description: Extract assets and data from the Minecraft jar.
keywords: legopitstop,python,java,minecraft,data,assets,pypi,jar,reports,pythonpackage,customtkinter,serverjars,userfolder
---

# mcextract

Extract assets and data from the Minecraft jar.

## Links

- :pie: [PyPI](https://pypi.org/project/mcextract)
- :file_folder: [Download](https://github.com/legopitstop/mcextract/releases)
- :gear: [Source Code](https://github.com/legopitstop/mcextract)

## Installation

Install the module with pip:

```bat
pip3 install mcextract
```

Update existing installation: `pip3 install mcextract --upgrade`

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

::: tip
You can queue multiple commands by separating them using a semicolon (`;`)

```sh
echo First; echo Second; echo Last
```

:::
