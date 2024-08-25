---
title: MCExtractAPI | mcextract
keywords: legopitstop,python,java,minecraft,data,assets,pypi,jar,reports,pythonpackage,customtkinter,serverjars,userfolder
---

# MCExtractAPI

## Parameters

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| `mcdirectory` | str  |             |
| `logger`      | bool |             |

## Methods

- [accept_eula](#accept_eula)
- [get_docker](#get_docker)
- [extract](#extract)
- [generate](#generate)
- [map](#map)

### accept_eula

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `prompt` | str  |             |

### get_docker

#### Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| `mcversion` | str  |             |

### extract

Extracts data and assets folders from the Minecraft jar.

#### Parameters

| Name          | Type | Description                                                                           |
| ------------- | ---- | ------------------------------------------------------------------------------------- |
| `jar_file`    | str  | The client jar to extract.                                                            |
| `assets`      | bool | Extract the assets folder?, defaults to False                                         |
| `data`        | bool | Extract the data folder?, defaults to False                                           |
| `output`      | str  | The output folder, defaults to generate                                               |
| `accept_eula` | bool | Specifies whether to automatically accept the Minecraft EULA Terms, defaults to False |

### generate

Use Minecraft's built-in data generator.

#### Parameters

| Name          | Type | Description                                                                           |
| ------------- | ---- | ------------------------------------------------------------------------------------- |
| `mcversion`   | str  | The Minecraft version to download or path to the jar.                                 |
| `args`        | list |                                                                                       |
| `output`      | str  | The output folder, defaults to generate                                               |
| `accept_eula` | bool | Specifies whether to automatically accept the Minecraft EULA Terms, defaults to False |

### map

Maps Minecraft's objects using an index file.

#### Parameters

| Name                | Type | Description                                                                           |
| ------------------- | ---- | ------------------------------------------------------------------------------------- |
| `index_file`        | str  | The JSON file used to map objects.                                                    |
| `objects_directory` | str  | The directory that contains the objects to map, defaults to None                      |
| `output`            | str  | The output folder, defaults to generate                                               |
| `accept_eula`       | bool | Specifies whether to automatically accept the Minecraft EULA Terms, defaults to False |

## Example

```py
import mcextract

api = mcextract.MCExtractAPI()
api.extract("1.20.4/1.20.4.jar", True, True, accept_eula=False)
api.map("16.json", accept_eula=True)
api.generate("1.20.6", ['--client', '--server', '--reports'], accept_eula=True)
```
