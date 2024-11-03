---
title: Lang Class | mclang
---

# Lang Class

A custom dict class which supports comments.

## Extends

- dict

## Properties

- [comments](#comments)

### comments

A list of all comments.

## Methods

- [format](#format)
- [translate](#translate)
- [insert_comment](#insert_comment)
- [remove_comment](#remove_comment)
- [clear_commnets](#clear_comments)
- `__setitem__`
- `__getitem__`

### format

#### Parameters

| Name   | Type | Description                                                                                        |
| ------ | ---- | -------------------------------------------------------------------------------------------------- |
| `s`    | str  | The key to translate                                                                               |
| `subs` |      | List of values to substitute. These can either be ordered (`%1`, `%2`, etc.) or not ordered (`%s`) |

### translate

#### Parameters

| Name       | Type | Default | Description                                                                                        |
| ---------- | ---- | ------- | -------------------------------------------------------------------------------------------------- |
| `key`      | str  |         | The key to translate                                                                               |
| `subs`     |      |         | List of values to substitute. These can either be ordered (`%1`, `%2`, etc.) or not ordered (`%s`) |
| `fallback` | str  | None    | The fallback text if key can't be found. Returns key by default.                                   |

### insert_comment

Inserts a comment to the file at a specified line before the key/value if any.

#### Parameters

| Name   | Type | Description                 |
| ------ | ---- | --------------------------- |
| `line` | int  | The line to insert at.      |
| `s`    | str  | The content of the comment. |

### remove_comment

Removes a comment at the specified index.

#### Parameters

| Name   | Type | Description            |
| ------ | ---- | ---------------------- |
| `line` | int  | The comment to remove. |

### clear_comments

Removes all comments from this file.
