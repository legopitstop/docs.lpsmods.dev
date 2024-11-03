---
title: Command Line Interface | mcextract Documentation
description: Extract assets and data from the Minecraft jar.
keywords: legopitstop,python,java,minecraft,data,assets,pypi,jar,reports,pythonpackage,customtkinter,serverjars,userfolder
---

# Command Line Interface

<MCExtractCLI />

## `mcextract extract`

Extract data or assets folders from the Minecraft jar.

### Usage

```sh
mcextract extract [jar_file]
```

### Options

| Option                    | Description              |
| ------------------------- | ------------------------ |
| `--assets`<br>`-assets`   | Extract assets folder.   |
| `--data`<br>`-data`       | Extract data folder.     |
| `--output`<br>`-o`        | The output folder.       |
| `--acceptEULA`<br>`-eula` | Accept Minecraft's EULA. |

## `mcextract map`

Maps Minecraft's objects using an index file.

### Usage

```sh
mcextract map [index_file] [objects_directory]
```

### Options

| Option                    | Description              |
| ------------------------- | ------------------------ |
| `--output`<br>`-o`        | The output folder.       |
| `--acceptEULA`<br>`-eula` | Accept Minecraft's EULA. |

## `mcextract generate`

Use Minecraft's built-in [data generator](https://minecraft.wiki/w/Tutorials/Running_the_data_generator).

### Usage

```sh
mcextract generate [mcversion]
```

### Options

| Option                    | Description                            |
| ------------------------- | -------------------------------------- |
| `--server`                | Generate server (Data Pack) files.     |
| `--client`                | Generate client (Resource Pack) files. |
| `--reports`               | Generate reports.                      |
| `--output`<br>`-o`        | The output folder.                     |
| `--acceptEULA`<br>`-eula` | Accept Minecraft's EULA.               |
