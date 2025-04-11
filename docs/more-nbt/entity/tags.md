---
title: Entity Tags | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Entity Tags

This nbt can only be used inside the storage 'minecraft:entity' Below you can find all the proper nbt used inside the storage.

## Parameters

```txt
minecraft:entity - The root tag.
 ├ entity: (enum) The entity to use. supported entities; 'minecraft:player'
 └ triggers: (array obj)
   ├ conditions: (enum list) A list of conditions that are formatted similar to Bedrock Editions MoLang view all valid conditions
   ├ events: (obj) The events to run. See Item Events
   └ type: The type of trigger. They all must start with the Minecraft namespace, in case if other packs want to add their own. the list of types and their additional tags are below.
     ├ item_in_inventory: item that is in inventory
     | ├ slot: (int) The slot number to execute at.
     | ├ count: (int) the number of items in this slot.
     | ├ count: (obj)
     | | ├ min: (int) The minimum count
     | | └ max: (int) The maximum count
     | ├ item: (string)  The item that needs to be in the slot. must contain the minecraft namespace unless 'custom_item' is true
     | └ custom_item: (bool) When true, 'item' will look for item.tag.id instead of item.id, for custom items. example custom item /give @p paper{id:"custom:test"}
     ├ holding_item: holding a item.
     | ├ count: (int) the number of items in this slot.
     | ├ count: (obj)
     | | ├ min: (int) The minimum count
     | | └ max: (int) The maximum count
     | ├ item: (string)  The item that needs to be in the slot. must contain the minecraft namespace unless 'custom_item' is true
     | └ custom_item: (bool) When true, 'item' will look for item.tag.id instead of item.id, for custom items. example custom item /give @p paper{id:"custom:test"}
     ├ walk_on_block: walking on a block.
     | └ block: (string) The block that the entity is on top of.
     └ near_entity: is near an entity.
       ├ entity: (string) The entity that the entity is close to.
       ├ distance: (int) will run when the entity is within these blocks.
       └ distance: (obj)
         ├ min: (int) The minimum distance
         └ max: (int) The maximum distance
```

## Example

```json
{
    "minecraft:entity": {
        "triggers": [
            {
                "type": "minecraft:condition",
                "conditions": [...]
            },
            {
                "type": "minecraft:item_in_invetory",
                "item": "minecraft:paper",
                "custom_item": false,
                "slot": 0,
                "count": 1,
                "conditions": [...],
                "events": {...}
            },
            {
                "type": "minecraft:holding_item",
                "item": "minecraft:paper",
                "custom_item": false,
                "count": 1,
                "conditions": [...],
                "events": {...}
            },
            {
                "type": "minecraft:walk_on_block",
                "block": "minecraft:bedrock",
                "conditions": [...],
                "events": {...}
            }
            {
                "type": "minecraft:near_entity",
                "entity": "minecraft:pig",
                "distance": {
                    "min": 0,
                    "max": 5
                },
                "conditions": [...],
                "events": {...}
            }
        ]
    }
}
```
