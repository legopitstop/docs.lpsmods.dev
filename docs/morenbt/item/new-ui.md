---
title: new_ui
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# new_ui

These tags are used directly inside the item's tag. when you have the item in your hand it will use the following data to create the UI. Note that all the tags below are inside the object `"new_ui"."1"`. `1` is the id of the UI currently only 1-10 are supported meaning you can add up to 10 unique UI's. Example: `{new_ui:{1:{ <--below data--> }}}`. Note that this will slow the server's TPS when using the item due to how much code needs to run to create the UI. May create a generator to easily, quickly create UI's.

## Parameters

```txt
new_ui - The root tag.
 ├ display: The name for the button that shows up in-game.
 | └ title: (RAW JSON) The title of the UI located at the top. the default will use chest translation.
 ├ buttons: A item inside the Inventory that will do stuff when you click on it.
 | ├ name: (RAW JSON) the name that will be on the button when you hover over it.
 | ├ slot: (0-26) What slot the button is located inside the UI.
 | ├ custom_button: opt custom item to use for the button. default button item is minecraft:stone_button
 | | ├ item: (string) Minecraft item to use.
 | | ├ count: (int) The number of items to place in that slot.
 | | └ nbt: (string) NBT data to apply to the item
 | └ clickEvent
 |    ├ open_ui: (obj)
 |    | └ id: (int) the id of the UI to open. Must be on the same item.
 |    ├ close_ui: (bool) When set to true it will kick the player from the UI.
 |    └ say: use the player's name inside the text.
 |      └ text: (string) the text to say
 |
 ├ fill_empty: (bool) If set to true it will use a preset item, looks like the background when RP is installed. or you can define your own item.
 ├ fill_empty: (obj)
 | ├ item: (string) Item's id that will be placed in all the empty slots
 | ├ count: (int) The number of items to place.
 | └ nbt: (string) opt The NBT to apply to this item.
 ├ filler: (array obj) Place items to fill unwanted slots in the UI.
 | ├ slots: (int array) Contains all the slot numbers where it will place this item inside the UI.
 | ├ item: (string) Item's id that will be placed in all the empty slots
 | ├ count: (int) The number of items to place.
 | └ nbt: (string) opt The NBT to apply to this item.
 ├ icon: Place items to fill unwanted slots in the UI.
 | ├ slots: (int array) Contains all the slot numbers where it will place this item inside the UI.
 | ├ item: (string) Item's id that will be placed in all the empty slots
 | ├ CustomModelData: (int) The CustomModelData tag for the item.
 | ├ count: (int) The number of items to place.
 | └ nbt: (string) opt The NBT to apply to this item.
 └ inventory: (Not added) Slots that will act as an inventory. This will contain all the same tags as the `Inventory` tag.
```

## Example

This example UI will bring you to the correct or wrong screens. depending on what button you click on the home screen.

```snbt
{
  new_ui: {
    1: {
      // Home screen id=1 will always be the first UI to open.
      display: {
        title: "{\"text\":\"Home\"}"
      },
      buttons: [
        {
          // exit button
          name: "{\"text\":\"Close\"}",
          slot: 8,
          custom_button: {
            item: "minecraft:barrier"
          },
          clickEvent: {
            close_ui: true
          }
        },
        {
          // correct button
          name: "{\"text\":\"Correct\"}",
          slot: 10,
          custom_button: {
            item: "minecraft:lime_concrete"
          },
          clickEvent: {
            open_ui: {
              id: 2
            }
          }
        },
        {
          // wrong button
          name: "{\"text\":\"Wrong\"}",
          slot: 14,
          custom_button: {
            item: "minecraft:red_concrete"
          },
          clickEvent: {
            open_ui: {
              id: 3
            }
          }
        }
      ],
      icon: {
        // lime concrete in the middle.
        item: "minecraft:lime_concrete",
        slot: 0,
        nbt: "{display:{Name:'{\"text\":\"Home\"}'}}"
      },
      fill_empty: {
        // fills all empty slots with gray stained glass panes.
        item: "minecraft:gray_stained_glass_pane"
      }
    },
    2: {
      // correct screen
      display: {
        // the title of the UI.
        title: "{\"text\":\"Correct\"}"
      },
      buttons: [
        {
          // close ui button. (top right)
          name: "{\"text\":\"Close\"}",
          slot: 8,
          custom_button: {
            item: "minecraft:barrier"
          },
          clickEvent: {
            close_ui: true
          }
        },
        {
          // back button (top left)
          name: "{\"text\":\"Back\"}",
          slot: 0,
          custom_button: {
            item: "minecraft:arrow"
          },
          clickEvent: {
            open_ui: {
              id: 1
            }
          }
        }
      ],
      icon: {
        // lime concrete in the middle.
        item: "minecraft:lime_concrete",
        slot: 12,
        nbt: "{display:{Name:'{\"text\":\"Correct!\"}'}}"
      },
      fill_empty: {
        // fills all empty slots with lime stained glass panes.
        item: "minecraft:lime_stained_glass_pane"
      }
    },
    3: {
      // Wrong screen
      display: {
        // the title of the UI.
        title: "{\"text\":\"Wrong\"}"
      },
      buttons: [
        {
          // close ui button. (top right)
          name: "{\"text\":\"Close\"}",
          slot: 8,
          custom_button: {
            item: "minecraft:barrier"
          },
          clickEvent: {
            close_ui: true
          }
        },
        {
          // back button (top left)
          name: "{\"text\":\"Back\"}",
          slot: 0,
          custom_button: {
            item: "minecraft:arrow"
          },
          clickEvent: {
            open_ui: {
              id: 1
            }
          }
        }
      ],
      icon: {
        // red concrete in the middle.
        item: "minecraft:red_concrete",
        slot: 12,
        nbt: "{display:{Name:'{\"text\":\"Wrong!\"}'}}"
      },
      fill_empty: {
        // fills all empty slots with red stained glass panes.
        item: "minecraft:red_stained_glass_pane"
      }
    }
  }
}
```
