---
title: Example New UI | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# New UI

Simple custom UI interface. `new_ui`

## Give Function

```mcfunction
function more_nbt:example_items/new_ui
```

## Give Item Command

::: code-group

```mcfunction [mcfunction]
give @p paper{moreNBT:{nbt_format:"IgnoreFormatOverride"},new_ui:{1:{display:{title:'{"text":"New UI | 1"}'},icon:{Name:'{"text":"Id = 1","italic":false,"color":"white"}',item:"minecraft:command_block",slot:0},buttons:[{Name:'{"text":"True","italic":false}',slot:13,clickEvent:{open_ui:{id:2},say:{text:"UI = true"}}},{Name: '{"text":"Close","italic":false}', custom_button:{item:"minecraft:barrier"},slot: 8, clickEvent: {say:{text:"UI = closed"},close_ui:true}}], fill_empty:{item:"minecraft:lime_stained_glass_pane"}},2:{display:{title:'{"text":"New UI | 2"}'},icon:{Name:'{"text":"Id = 2","italic":false,"color":"white"}',item:"minecraft:command_block",slot:0},buttons:[{Name:'{"text":"False","italic":false}',slot:13,clickEvent:{open_ui:{id:1},say:{text:"UI = false"}}},{Name: '{"text":"Close","italic":false}', custom_button:{item:"minecraft:barrier"},slot: 8, clickEvent: {say:{text:"UI = closed"},close_ui:true}}], fill_empty:{item:"minecraft:red_stained_glass_pane"}}}}
```

```snbt [snbt]
{
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  new_ui: {
    1: {
      display: {
        title: "{\"text\": \"New UI | 1\"}"
      },
      icon: {
        Name: "{\"text\": \"Id = 1\",\"italic\": false,\"color\": \"white\"}",
        item: "minecraft:command_block",
        slots: [0]
      },
      buttons: [
        {
          Name: "{\"text\": \"True\",\"italic\": false}",
          slot: 13,
          clickEvent: {
            open_ui: {
              id: 2
            },
            say: {
              text: "UI = true"
            }
          }
        },
        {
          Name: "{\"text\": \"Close\",\"italic\": false}",
          custom_button: {
            item: "minecraft:barrier",
            count: 1
          },
          slot: 8,
          clickEvent: {
            say: {
              text: "UI = closed"
            },
            close_ui: true
          }
        }
      ],
      fill_empty: {
        item: "minecraft:lime_stained_glass_pane"
      }
    },
    2: {
      display: {
        title: "{\"text\": \"New UI | 2\"}"
      },
      icon: {
        Name: "{\"text\": \"Id = 2\",\"italic\": false,\"color\": \"white\"}",
        item: "minecraft:command_block",
        slots: [0]
      },
      buttons: [
        {
          Name: "{\"text\": \"False\",\"italic\": false}",
          slot: 13,
          clickEvent: {
            open_ui: {
              "id: 1
            },
            say: {
              text: "UI = false"
            }
          }
        },
        {
          Name: "{\"text\": \"Close\",\"italic\": false}",
          custom_button: {
            item: "minecraft:barrier",
            count: 1
          },
          slot: 8,
          clickEvent: {
            say: {
              text: "UI = closed"
            },
            close_ui: true
          }
        }
      ],
      fill_empty: {
        item: "minecraft:red_stained_glass_pane"
      }
    }
  }
}
```

:::
