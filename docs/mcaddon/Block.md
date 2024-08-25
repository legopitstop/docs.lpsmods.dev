---
title: Block | mcaddon
description: Utility functions for creating Minecraft Bedrock Add-Ons.
keywords: legopitstop,python,minecraft,json,pypi,resourcepack,development-kit,add-on,bedrock-edition,mcpack,pythonpackage,behaviorpack,mcaddon
---

# Block

Represents a data-driven Block. [MS Docs](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockjsonfilestructure?view=minecraft-bedrock-stable)

## Parameters

| Name            | Type                                                 | Description |
| --------------- | ---------------------------------------------------- | ----------- |
| `identifier`    | [Identifier](/mcaddon/Identifier)                    |             |
| `menu_category` | [MenuCategory](/mcaddon/MenuCategory)                |             |
| `components`    | dict[str, [BlockComponent](/mcaddon/BlockComponent)] |             |
| `events`        | dict[Identifier, [Event](/mcaddon/Event)]            |             |
| `traits`        | dict[Identifier, [BlockTrait](/mcaddon/BlockTrait)]  |             |
| `states`        | dict[Identifier, list[str]]                          |             |
| `sound_group`   | str                                                  |             |

## Methods

## Example

```py
from mcaddon import *

blk = Block('test:on_interact_change_state_block')
blk.add_component(OnInteractComponent(event='test_event'))
blk.add_event('test_event', SetBlockProperty({'custom:direction': "1"}))
blk.save('block.json')
```
