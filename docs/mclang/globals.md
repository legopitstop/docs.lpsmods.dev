---
title: globals | mclang
description: Read and write to .lang files.
---

# globals

## Variables

## Functions

- [set_language](#set_language)
- [get_language](#get_language)
- [init](#init)
- [translate](#translate)
- [dump](#dump)
- [dumps](#dumps)
- [load](#load)
- [loads](#loads)

### set_language

Override the locale language.

#### Parameters

| Name   | Type | Description      |
| ------ | ---- | ---------------- |
| `lang` | str  | The lang to use. |

### get_language

Returns the configured language code

### init

Load lang file from the directory path.

#### Parameters

| Name      | Type | Default | Description                                                     |
| --------- | ---- | ------- | --------------------------------------------------------------- |
| `path`    | str  |         | Directory path to the .lang files                               |
| `default` | str  | `en_US` | The default lang file to use if the locale lang does not exist. |

### translate

Use the root translator.

#### Parameters

| Name       | Type | Default | Description                                                                                        |
| ---------- | ---- | ------- | -------------------------------------------------------------------------------------------------- |
| `key`      | str  |         | The key to translate                                                                               |
| `subs`     |      |         | List of values to substitute. These can either be ordered (`%1`, `%2`, etc.) or not ordered (`%s`) |
| `fallback` | str  | None    | The fallback text if key can't be found. Returns key by default.                                   |

### dump

Serialize obj as a LANG formatted stream to fp (a `.write()`-supporting file-like object).

#### Parameters

| Name  | Type                      | Description             |
| ----- | ------------------------- | ----------------------- |
| `obj` | [Lang](./Lang.md) or dict | The object to serialize |
| `fp`  | str                       | The file-like object    |

### dumps

Serialize obj to a LANG formatted str.

#### Parameters

| Name  | Type                      | Description             |
| ----- | ------------------------- | ----------------------- |
| `obj` | [Lang](./Lang.md) or dict | The object to serialize |

### load

Deserialize fp (a `.read()`-supporting file-like object containing a LANG document) to a Python object.

#### Parameters

| Name | Type         | Description                         |
| ---- | ------------ | ----------------------------------- |
| `fp` | str or bytes | The file-like object to deserialize |

### loads

Deserialize s (a str, bytes or bytearray instance containing a LANG document) to a Python object.

#### Parameters

| Name | Type                     | Description                                 |
| ---- | ------------------------ | ------------------------------------------- |
| `s`  | str, bytes, or bytearray | The str, bytes, or bytearray to deserialize |
