---
title: How to add a resource pack to a server
description: Step-by-step instructions on how to add a resource pack to a Minecraft Java Edition server
---

<!-- TODO: Needs screenshots -->

# How to add a resource pack to a server

Step-by-step instructions on how to add a resource pack to a [Minecraft: Java Edition](https://minecraft.wiki/w/Java_Edition) server

## Universal

1. Upload the resource pack ZIP file to any file host. In this tutorial we will be using [dropbox](https://dropbox.com)
1. Once uploaded copy the download link.
1. Now, open your `server.properties` file on your server.
1. Inside the properties file find the line that contains `resource-pack=`
1. Paste your download link after the `=` so it looks like below.

```properties
resource-pack=https://dropbox.com/...
```

1. Now at the end of the url replace the `dl=0` with `dl=1`
1. Finally, restart the server and connect to it from a client. The resource pack will be downloaded and loaded.
