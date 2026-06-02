---
title: Translation Guide
description: Translation Schemas for Minecraft Bedrock Add-Ons.
---

# Translation Guide

Translation Schemas for Minecraft Bedrock Add-Ons.

## Language Files

Minecraft reads translations from `texts/[locale].lang` files. Each pack should also include `texts/languages.json`, and `en_US.lang` is required as the fallback language.

```txt
BP/
└── texts/
    ├── languages.json
    └── en_US.lang
```

## Blocks

- `tile.[namespace]:[path].name`

```lang
tile.wiki:custom_block.name=Custom Block
```

## Items

- `item.[namespace]:[path]` (Custom item `minecraft:display_name` key)
- `item.[path].name` (Vanilla item key)

```lang
item.wiki:custom_item=Custom Item
item.apple.name=Apple
```

## Entities

- `entity.[namespace]:[path].name`
- `action.interact.[namespace]:[path]` (`interact_text` in interactions component)
- `item.spawn_egg.entity.[namespace]:[path].name` (Entity spawn egg)

```lang
entity.wiki:custom_entity.name=Custom Entity
action.interact.wiki:ignite=Ignite
item.spawn_egg.entity.wiki:custom_entity.name=Custom Entity Spawn Egg
```

## Server UI

- `menu.[namespace]:[path]`
- `options.[namespace]:[path]` (Modal option)
- `options.[namespace]:[path].desc` (Modal option description)

```lang
menu.wiki:settings=User Settings
options.wiki:custom_option=Custom Option
options.wiki:custom_option.desc=Does something
```

## Commands

- `commands.[namespace].[path]`
- `commands.[namespace].[path].description` (Command description)
- `commands.[namespace].[path].success` (Command success)
- `commands.[namespace].[path].failed` (Command failed)

```lang
commands.wiki.custom_command.description=Does some cool stuff
commands.wiki.custom_command.success=Ran without errors.
commands.wiki.custom_command.failed=Failed.
```

## Skin

- `skin.[localization_name].[skin_localization_name]`

```lang
skin.wiki.custom_skin=Custom Skin
```

## Persona

- `persona.[path].title`

```lang
persona.custom.title=Custom
```

## Pack

- `pack.name`
- `pack.description`
- `skinpack.[namespace]` (For skin packs)

```lang
pack.name=Custom Pack!
pack.description=Some awesome pack!
skinpack.wiki=Wiki Skins
```

## Item Group

- `[namespace]:itemGroup.name.[path]` (Custom crafting item catalog group)
- `minecraft:itemGroup.name.[path]` (Vanilla crafting item catalog group)

```lang
wiki:itemGroup.name.custom_group=Custom Group
minecraft:itemGroup.name.planks=Planks
```

## Misc

- `chat.[namespace]:[path]` (Message sent in chat)

```lang
chat.wiki:custom_message=Hello, World!
```
