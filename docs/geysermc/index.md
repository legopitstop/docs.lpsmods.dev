---
title: GeyserMC
---

# GeyserMC

The unofficial Python wrapper for [geysermc.org](https://geysermc.org)

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
