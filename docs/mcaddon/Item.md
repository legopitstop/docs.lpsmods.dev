---
title: Item | mcaddon Documentation
description: Utility functions for creating Minecraft Bedrock Add-Ons.
---

# Item

Represents a data-driven Item. [MS Docs](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/itemreference/examples/itemdefinition?view=minecraft-bedrock-stable)

## Parameters

| Name            | Type                            | Description |
| --------------- | ------------------------------- | ----------- |
| `identifier`    | Identifier                      |             |
| `menu_category` | MenuCategory                    |             |
| `components`    | dict[Identifier, ItemComponent] |             |
| `events`        | dict[Identifier, Event]         |             |

## Methods

## Example

```py
from mcaddon import *

blk = Item('minecraft:blaze_rod')
blk.add_component(FuelComponent(12.0))
blk.add_component(MaxStackSizeComponent(64))
blk.add_component(IconComponent('blaze_rod'))
blk.add_component(HandEquippedComponent(True))
blk.add_component(DisplayNameComponent('Blaze Rod'))
blk.save('item.json')
```
