---
title: IgnoreFilter | gitfiles Documentation
description: Load, filter and match .gitingore files.
keywords: legopitstop,python,minecraft,pypi,gitignore,pythonpackage
---

# IgnoreFilter class

## Parameters

| Name          | Type | Default       | Description                            |
| ------------- | ---- | ------------- | -------------------------------------- |
| `path`        | str  | `os.getcwd()` | The directory to look for ignore files |
| `ignore_file` | str  | `.gitignore`  | The ignore filename                    |

## Methods

- [match](#match)
- [match_case](#match_case)
- [filter](#filter)

### `match`

Test whether FILENAME matches pattern

#### Parameters

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `name` | str  | Filename to match. |

### `match_case`

Test whether FILENAME matches pattern, including case.

#### Parameters

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `name` | str  | Filename to match. |

### `filter`

Construct a list from those elements of the iterable NAMES that match pattern.

#### Parameters

| Name    | Type          | Description           |
| ------- | ------------- | --------------------- |
| `names` | Iterable[str] | A list of path names. |

## Example

Load `.dockerignore`

```py
import gitfiles
filter = gitfiles.IgnoreFilter(ignore_file='.dockerignore')

filter.match('file.so')
```
