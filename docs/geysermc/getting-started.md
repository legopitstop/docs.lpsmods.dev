---
title: Getting Started | GeyserMC Documentation
---

# Getting Started

## Installation

<PythonInstallation project="geysermc" />

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
