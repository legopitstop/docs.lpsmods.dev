---
title: SpriteSheet | TkinterPlus
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
keywords: legopitstop,python,pypi,widgets,pillow,pygame,tkinter,pythonpackage
---

# SpriteSheet

## Parameters

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| `size`        | tuple |             |
| `max_columns` | int   |             |

## Methods

- [open](#open)
- [new](#new)
- [resize](#resize)
- [show](#show)
- [add_sprite](#add_sprite)
- [save](#save)
- [get_sprite](#get_sprite)
- [get_sprite_name](#get_sprite_name)

### open

Create a new spritesheet

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `fp`      | str  |             |
| `formats` |      |             |

### new

### resize

Resize the spritesheet to fit more spites

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `row`    | int  |             |
| `column` | int  |             |

### show

Show the spritesheet

### add_sprite

Add an image sprite to the spritesheet

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| `fp`      | str  |             |
| `name`    | str  |             |
| `formats` |      |             |

### save

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `fp`     | str  |             |
| `format` |      |             |

### get_sprite

Get a sprite from the spritesheet using the sprite position.

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `row`    | int  |             |
| `column` | int  |             |

### get_sprite_name

Get a sprite from the spritesheet using the sprite name

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| `name` | str  |             |
