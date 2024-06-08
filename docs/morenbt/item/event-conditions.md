---
title: Event Conditions
description: Add new NBT Tags to make customization easier! 
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Event Conditions

Used to make an event run only when the condition is true. Makes your code a little bit more customizable. conditions are similar to [predicates](https://minecraft.wiki/w/Predicate)

## Parameters

```
conditions - (obj list) The root tag.
 ├ condition: (string) The condition's ID.
 └ Other parts of the condition, specified below.

The possible values for `condition` and associated extra contents:

time_check - Checks the current time
 ├ value: (int) The time value in ticks.
 └ value:
   ├ min: (int) The minimum value.
   └ max: (int) The maximum value.

weather_check - Checks for a current weather state
 ├ raining: (boolean) If true, the condition evaluates to true only if it's raining.
 └ thundering: (boolean) If true, the condition evaluates to true only if it's thundering.

match_tool - Checks tool.
 └ predicate
   ├ item: (string) An item ID.
   ├ count: (int) Amount of the item.
   ├ count:
   | ├ min: (int) The minimum value.
   | └ max: (int) The maximum value.
   └ nbt: (string) An NBT string.

entity_properties - Test properties of an entity.
 ├ entity: (string) Specifies the entity to check for the condition. Default: `this`
 └ predicate
   ├ type: (string) An entity ID.
   ├ flags: Predicate Flags to be checked.
   | ├ is_on_fire: Test whether the entity is or is not on fire.
   | ├ is_sleeping: Test whether the entity is or is not sleeping.
   | ├ is_jumping: Test whether the entity is or is not jumping.
   | ├ is_flying: Test whether the entity is or is not flying.
   | ├ is_falling: Test whether the entity is or is not falling.
   | ├ is_walking: Test whether the entity is or is not walking.
   | ├ is_sneaking Test whether the entity is or is not sneaking.
   | ├ is_sprinting: Test whether the entity is or is not sprinting.
   | ├ is_swimming: Test whether the entity is or is not swimming.
   | ├ is_climbing: Test whether the entity is or is not climbing.
   | ├ is_in_water: Test whether the entity is or is not in water.
   | ├ is_in_lava: Test whether the entity is or is not in lava.
   | ├ is_in_cave: Test whether the entity is or is not in cave.
   | ├ is_in_void: Test whether the entity is or is not in void.
   | ├ is_on_ground: Test whether the entity is or is not on ground.
   | └ is_holding_item: Test whether the entity is or is not holding an item.
   └ player: Player properties to be checked. Fails when entity is not a player.
     └ gamemode: (string) The game mode of the player. Must be survival, adventure, creative or spectator.
```

## Example

```snbt
{
    conditions: [
        {
            condition: "minecraft:time_check",
            value: 6000
        },
        {
            condition: "minecraft:weather_check",
            raining: false,
            thundering: false
        },
        {
            condition: "minecraft:entity_properties",
            entity: "this",
            predicate: {
                type: "player",
                flags: {
                    is_on_fire: false,
                    is_sleeping: false,
                    is_jumping: false,
                    is_flying: false,
                    is_falling: false,
                    is_walking: false,
                    is_sneaking: false,
                    is_sprinting: false,
                    is_swimming: false,
                    is_climbing: false,
                    is_in_water: false,
                    is_in_lava: false,
                    is_in_cave: false,
                    is_in_void: false,
                    is_on_ground: false,
                    is_holding_item: false
                },
                player: {
                    gamemode: "adventure"
                }
            }
        },
        {
            condition: "minecraft:match_tool",
            predicate: {
                item: "minecraft:stone_pickaxe",
                count: 1,
                nbt: "{...}"
            }
        }
    ],
    event: {...}
}
```
