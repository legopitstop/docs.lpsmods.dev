---
title: How to Extract Minecraft Assets
description: Step-by-step instructions on how to extract Minecraft Java Edition data and assets
---

# How to Extract Minecraft Assets

<!-- TODO: Needs screenshots -->

Step-by-step instructions on how to extract [Minecraft: Java Edition](https://minecraft.wiki/w/Java_Edition) data and assets

## Universal

1. Go to your [.minecraft](/tutorials/how-to-find-minecraft-folder) folder
1. Locate your "versions" folder and open it.
1. Find the version you want to extract, it should be a `.jar` file
1. If you don't have a program to open it simply make a copy of the jar.
1. Change the file extension from `.jar` to `.zip`. You should be able to open and see the assets.
1. The most useful parts of the JAR are the assets and data folders. The assets folder has all the textures that can be used in a resource pack. The data folder can be used in a datapack.

## Using mcextract CLI

1. Install [Python](https://python.org/downloads/) if you haven't already.
1. Install the [mcextract](https://pypi.org/project/mcextract) package by running this command in your terminal.

```bat
pip install mcextract
```

1. Now you can use the `mcextract` command in your terminal.
1. Run the below command to extract the assets and data folder from the client jar.

```bat
mcextract extract 1.21.1/1.21.1.jar --assets --data -eula
```

You can find the docs for the mcextract CLI via the [mcextract Documentation](../mcextract/cli.md)
