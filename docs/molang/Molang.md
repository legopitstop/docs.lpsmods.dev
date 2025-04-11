---
title: Molang | molang Documentation
description: Molang to Python Translator & interpreter written in pure Python.
keywords: legopitstop,language,minecraft,bedrock,molang
---

# Molang

::: warning
This is a placeholder class and could be removed in a future version.
:::

## Extends

- str

## Methods

- [from_ast](#from_ast)
- [append](#append)
- [prepend](#prepend)

### `from_ast`

Converts a Python abstract syntax tree to Molang.

#### Parameters

| Name       | Type       | Description            |
| ---------- | ---------- | ---------------------- |
| `ast_node` | ast.Module | The ast node to parse. |

### `append`

Adds text to the end of the expression.

#### Parameters

| Name | Type | Description         |
| ---- | ---- | ------------------- |
| `s`  | str  | The text to append. |

### `prepend`

Adds text to the start of the expression.

#### Parameters

| Name | Type | Description          |
| ---- | ---- | -------------------- |
| `s`  | str  | The text to prepend. |
