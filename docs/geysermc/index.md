---
title: GeyserMC Documentation
description: The unofficial Python wrapper for geysermc.org
keywords: legopitstop,python,minecraft,pypi,geysermc,pythonpackage
next:
  text: TkinterPlus
  link: /tkinterplus/
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

## Methods

- get_bedrock_link
- get_java_link
- verify_online_link
- get_all_stats
- get_gamertag_batch
- get_gamertag
- get_xuid
- get_recent_uploads
- get_skin
- get_project_news
- get_bedrock_or_java_uuid
- get_openapi
- get_projects
- get_project
- get_version
- get_version_builds
- get_build
- get_download
- get_raw_texture
