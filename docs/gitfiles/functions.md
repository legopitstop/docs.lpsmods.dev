---
title: Functions | gitfiles Documentation
description: All functions in the gitfiles module.
---

# Functions

## `load_gitignore`

Load all `.gitignore` files in working directory.

## `match`

Test whether FILENAME matches pattern in `.gitignore`.

### Parameters

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `name` | str  | Filename to match. |

## `match_case`

Test whether FILENAME matches pattern in `.gitignore`, including case.

### Parameters

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `name` | str  | Filename to match. |

## `filter`

Construct a list from those elements of the iterable NAMES that match pattern in `.gitignore`.

### Parameters

| Name    | Type          | Description           |
| ------- | ------------- | --------------------- |
| `names` | Iterable[str] | A list of path names. |
