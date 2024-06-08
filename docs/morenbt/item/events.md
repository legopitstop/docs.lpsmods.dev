---
title: Events
description: Add new NBT Tags to make customization easier! 
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Events

These tags are held inside item trigger events. see [Trigger Events](/morenbt/item/trigger-events).

## Parameters

```
cooldown: (obj) Only for `on_use` trigger. Will have a cooldown to prevent spamming
 └ value: (int) The amount of delay/cooldown. in ticks (sec * 20 = ticks)

add_mob_effect: (obj list) Will give the target the selected effect(s).
 ├ target: (string) The target context to execute against.
 ├ effect: (string) the Minecraft effect
 └ showIcon: (boolean) When true it will show the particles (default: true)

remove_mob_effect: (obj list) Will remove the target the selected effect(s)
 ├ target: (string) The target context to execute agenst.
 └ effect: (string) the minecraft effect.

die - will kill the target
 └ target: (string) The target context to execute against.

transform_item - replace the currently held item with the new determined item.
 └ transform: (string) The item ID that will be replaced.

item - This will copy and move the item to the new selected slot.
 ├ type: (enum) The type of entity to execute at. `block` or `entity`
 ├ slot: (enum) The slot to execute at. `container.<0-26>`, `armor.<head|chest|legs|feet>`, or `weapon.<mainhand|offhand>`
 ├ pos: [x, y, z] type=block. The location of the block. Only supports [0,-1,0]
 └ copy: Copy data from a source.
   ├ type: (enum) The type of entity to copy from. `block` or `entity`
   ├ pos: [x, y, z] type=block. The location of the block. Only supports [0,-1,0]
   └ slot: (enum) The slot to copy from. `container.<0-26>`, `armor.<head|chest|legs|feet>`, or `weapon.<mainhand|offhand>`

merge_data - will apply the data to the item.
 ├ CustomModelData: replaces the old tag with one stated in `value`.
 | └ value: (int) value it will replace
 ├ Damage: replaces the old tag with one stated in `value`.
 | └ value: (int) value it will replace
 ├ HideFlags: replaces the old tag with one stated in `value`.
 | └ value: (int) value it will replace
 └ Unbreakable: replaces the old tag with one stated in `value`.
   └ value: (int) value it will replace

show_text - holds text-related objects.
 ├ clear: clears title, subtitle, and actionbar
 | └ target: (string) The target context to execute against.
 ├ say: says the message in chat
 | └ text: (string) The message to display.
 ├ tellraw: says the formattable message in chat
 | ├ target: (string) The target context to execute against.
 | └ raw_text: (string) The JSON Formatted text to show.
 ├ title: text in front of a screen
 | ├ target: (string) The target context to execute against.
 | └ raw_text: (string) The JSON Formatted text to show.
 ├ subtitle: text below the title
 | ├ target: (string) The target context to execute against.
 | └ raw_text: (string) The JSON Formatted text to show.
 └ actionbar: text above Hotbar
   ├ target: (string) The target context to execute against.
   └ raw_text: (string) The JSON Formatted text to show.

decrement_stack - removes one item from the stack.
 └ ignore_game_mode: (boolean) If true  (default: false)

play_sound - will play the sound.
 ├ target: (string) The target context to execute against.
 └ sound: (string) The sound to play. Only some are currently supported.

score - add, remove, set scores on a scoreboard.
 ├ add: adds score
 | ├ name: (string) The target context to execute against.
 | ├ objective: (string) Objective. Must be "score.test#" 0-9.
 | └ amount: (int) How much to add to the score
 ├ set: sets score
 | ├ name: (string) The target context to execute against.
 | ├ objective: (string) Objective. Must be "score.test#" 0-9.
 | └ amount: (int) What to set the score to
 └ remove: removes score
   ├ name: (string) The target context to execute against.
   ├ objective: (string) Objective. Must be "score.test#" 0-9.
   └ amount: (int) How much to remove.

damage - will deal damage to the target.
 ├ target: (string) The target context to execute against.
 ├ type: (string) The way to apply the damage: "EFFECT", "ARROW".
 └ amount: (int) How many half hearts to apply to the target.

reload - will reload the server. If it is a modded server it will run reload confirm.
 └ confirm: (bool) Must be set to true for it to reload the server. (default: false)

random - will output a random number from the min and max numbers.
 ├ min: (int) The minimum number to use. Must be less than max.
 ├ max: (int) The maximum number to use. Must be more than min.
 └ result: (int) This is the output integer. (SelectedItem.tag.<trigger event>.random.result)

summon - Summon an entity with optional nbt data.
 ├ placement: (string) How to place the entity. This may change. Valid strings: "ON_PLAYER","ON_BLOCK"
 ├ entity: (string) The entity to summon.
 └ nbt: (array) opt nbt that the entity has.

structure - places a structure
 ├ structure_name: (string) The structure to place. (default: more_nbt:test)
 ├ pos: (int array) The position/ offset of the structure. using the schema [x, y, z] (default:[0,1,0])
 ├ ignoreEntities: (bool) opt place entities that are stored in the structure file. (default: false)
 └ powered: (bool) opt This will make the structure automatically load when the item is used. if false it will place the structure block. (default: true)
```

## Experimental Parameters

```
loot - Get the loot from a loot table.
 ├ target: (string) How to get the resulting items. Valid strings: "spawn","give"
 ├ source: (string) Where to get the loot from. Valid strings: "loot","kill"
 ├ table: (string) The loot table to use. When source=loot.
 └ entity: The loot table to use. When source=kill.
   ├ sort: (string) Where to look for the entity. Valid strings: "nearest".
   └ type: (string) Entity to look for. Excepts all entities.
set_block - Set a block with optional data.
 ├ block_type: (string) The block to place
 ├ pos: (int array) Offset on where to place the block
 ├ nbt: (obj array) Nbt data to apply to the block.
 └ blockstate: (string array) block state to apply to the block.
run_command - (not working) will run the command or commands.
 ├ command: (string) The command to run.
 └ command: (string array) The command to run.
```

## Examples

`cooldown`

```snbt
{
  cooldown: {
    value: 20
  }
}
```

`add_mob_effect`

```snbt
{
  add_mob_effect: [
    {
      target: "this",
      effect: "minecraft:luck",
      showIcon: false
    }
  ]
}
```

`remove_mob_effect`

```snbt
{
  remove_mob_effect: [
    {
      target: "this",
      effect: "minecraft:luck"
    }
  ]
}
```

`die`

```snbt
{
  die: {
    target: "this"
  }
}
```

`transform_item`

```snbt
{
  transform_item: {
    transform: "minecraft:paper"
  }
}
```

`item`

```snbt
{
  item: {
    type: "entity",
    slot: "armor.head",
    copy: {
      type: "entity",
      slot: "weapon.mainhand"
    }
  }
}
```

`item`

```snbt
{
  item: {
    type: "block",
    pos: [0, -1, 0],
    slot: "container.0",
    copy: {
      type: "block",
      pos: [0, -1, 0],
      slot: "container.0"
    }
  }
}
```

`merge_data`

```snbt
{
  merge_data: {
    CustomModelData: {
      value: 1
    },
    Damage: {
      value: 1
    },
    HideFlags: {
      value: 34
    },
    Unbreakable: {
      value: 1
    }
  }
}
```

`show_text`

```snbt
{
  show_text: {
    clear: {
      target: "this"
    },
    say: {
      text: "<message to display>"
    },
    tellraw: {
      target: "this",
      raw_text: "{\"text\":\"<message to display>\"}"
    },
    title: {
      target: "this",
      raw_text: "{\"text\":\"<message to display>\"}"
    },
    subtitle: {
      target: "this",
      raw_text: "{\"text\":\"<message to display>\"}"
    },
    actionbar: {
      target: "this",
      raw_text: "{\"text\":\"<message to display>\"}"
    }
  }
}
```

`decreasement_stack`

```snbt
{
  decrement_stack: {
    ignore_game_mode: true
  }
}
```

`play_sound`

```snbt
{
  play_sound: {
    target: "this",
    sound: "minecraft:block.barrel.open"
  }
}
```

`score`

```snbt
{
  score: {
    add: {
      name: "@p",
      objective: "score.test0",
      amount: 1
    },
    set: {
      name: "@p",
      objective: "score.test0",
      amount: 1
    },
    remove: {
      name: "@p",
      objective: "score.test0",
      amount: 1
    }
  }
}
```

`damage`

```snbt
{
  damage: {
    target: "this",
    type: "EFFECT",
    amount: 2
  }
}
```

`reload`

```snbt
{
  reload: {
    confirm: true
  }
}
```

`random`

```snbt
{
  random: {
    min: 0,
    max: 10,
    result: 5
  }
}
```

`summon`

```snbt
{
  summon: {
    placement: "ON_PLAYER",
    entity: "minecraft:pig",
    nbt: "{CustomName:'{\"text\":\"Summoned Entity\"}'}"
  }
}
```

`structure`

```snbt
{
  structure: {
    structure_name: "minecraft:village/small_house",
    pos: [0, -1, 0],
    ignoreEntities: true
  }
}
```

## Experimental Examples

`loot`

```snbt
{
  loot: {
    // gives the player the loot from loot_tables file.
    target: "give",
    source: "loot",
    table: "minecraft:chest/empty"
  },
  loot: {
    // gives the player the loot when you kill the nearest pig.
    target: "give",
    source: "kill",
    entity: {
      type: "minecraft:pig",
      sort: "nearest"
    }
  }
}
```

`set_block`

```snbt
{
  set_block: {
    block_type: "minecraft:barrel",
    pos: [0, 0, 0],
    nbt: "{CustomName:'{\"text\":\"Renamed Barrel\"}'}",
    blockstate: ["facing=north"]
  }
}
```

`run_command`

```snbt
{
  run_command: {
    command: "give @p diamond_block"
  }
}
```
