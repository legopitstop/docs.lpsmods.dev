---
title: GeyserMC Documentation
description: The unofficial Python wrapper for geysermc.org
keywords: legopitstop,python,minecraft,pypi,geysermc,pythonpackage
next:
  text: gitfiles
  link: /gitfiles/
---

# GeyserMC

The unofficial Python wrapper for [geysermc.org](https://geysermc.org)

## Links

- :pie: [PyPI](https://pypi.org/project/geysermc)
- :file_folder: [Download](https://github.com/legopitstop/geysermc/releases)
- :gear: [Source Code](https://github.com/legopitstop/geysermc)
- :book: [GeyserMC Global API](https://api.geysermc.org/docs)

## Installation

Install the module with pip:

```bat
pip3 install geysermc
```

Update existing installation: `pip3 install geysermc --upgrade`

## Examples

Show bedrock player skin

```Python
import geysermc

xuid = geysermc.get_xuid('legopitstop')
skin = geysermc.get_skin(xuid)
image = geysermc.get_raw_texture(skin.texture_id)
image.show()
```

Download Geyser plugin

```Python
import geysermc

with open('geyser-spigot.jar', 'wb') as fd:
    data = geysermc.get_download('geyser', 'spigot')
    fd.write(data)
```
