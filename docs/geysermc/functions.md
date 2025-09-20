---
title: Functions | GeyserMC Documentation
description: The unofficial Python wrapper for geysermc.org
---

# Functions

## `get_bedrock_link`

Get a linked Java account from Bedrock xuid

### Parameters

| Name   | Type | Description  |
| ------ | ---- | ------------ |
| `xuid` | int  | Bedrock xuid |

## `get_java_link`

Get linked Bedrock account from Java UUID

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `uuid` | str  | Java UUID   |

## `verify_online_link`

undocumented

## `get_all_stats`

Get all publicly available Global API statistics

## `get_gamertag_batch`

undocumented

## `get_gamertag`

Get the gamertag from a xuid

### Parameters

| Name   | Type | Description                    |
| ------ | ---- | ------------------------------ |
| `xuid` | int  | The xuid of the Bedrock player |

## `get_xuid`

Get the xuid from a gamertag

### Parameters

| Name       | Type | Description                        |
| ---------- | ---- | ---------------------------------- |
| `gamertag` | str  | The gamertag of the Bedrock player |

## `get_recent_uploads`

Get a list of the most recently uploaded skins

## `get_skin`

Get the most recently converted skin of a Bedrock player

### Parameters

| Name   | Type | Description  |
| ------ | ---- | ------------ |
| `xuid` | int  | Bedrock xuid |

## `get_project_news`

undocumented

## `get_bedrock_or_java_uuid`

Utility endpoint to get either a Java UUID or a Bedrock xuid

### Parameters

| Name       | Type | Description                                               |
| ---------- | ---- | --------------------------------------------------------- |
| `username` | str  | The username of the Minecraft player                      |
| `prefix`   | str  | The prefix used in your Floodgate config, defaults to "." |

## `get_openapi`

undocumented

## `get_projects`

Gets a list of all available projects.

## `get_project`

Gets information about a project.

### Parameters

| Name      | Type | Description             |
| --------- | ---- | ----------------------- |
| `project` | str  | The project identifier. |

## `get_version`

Gets information about a version.

### Parameters

| Name      | Type | Description                                     |
| --------- | ---- | ----------------------------------------------- |
| `project` | str  | The project identifier.                         |
| `version` | str  | A version of the project., defaults to "latest" |

## `get_version_builds`

Gets all available builds for a project's version.

### Parameters

| Name      | Type | Description                                     |
| --------- | ---- | ----------------------------------------------- |
| `project` | str  | The project identifier.                         |
| `version` | str  | A version of the project., defaults to "latest" |

## `get_build`

Gets information related to a specific build.

### Parameters

| Name      | Type | Description                                     |
| --------- | ---- | ----------------------------------------------- |
| `project` | str  | The project identifier.                         |
| `version` | str  | A version of the project., defaults to "latest" |
| `build`   | str  | A build of the version., defaults to "latest"   |

## `get_download`

Downloads the given file from a build's data.

### Parameters

| Name       | Type | Description                                     |
| ---------- | ---- | ----------------------------------------------- | --------------------------------------------- |
| `project`  | str  | The project identifier.                         |
| `download` | str  | A download of the build.                        |
| `version`  | str  | A version of the project., defaults to "latest" |
| `build`    | int  | str                                             | A build of the version., defaults to "latest" |

## `get_raw_texture`

get_raw_texture

### Parameters

| Name         | Type | Description     |
| ------------ | ---- | --------------- |
| `texture_id` | str  | Java texture id |
