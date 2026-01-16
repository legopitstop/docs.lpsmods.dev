---
title: Translation Guide
description: Translation Schemas for Minecraft Bedrock Add-Ons.
---

# Translation Guide

Translation Schemas for Minecraft Bedrock Add-Ons.

## Blocks

- `tile.[namespace]:[path].name`

```lang
tile.wiki:custom_block.name=Custom Block
```

## Items

- `item.[namespace]:[path]`

```lang
item.wiki:custom_item=Custom Item
```

## Entities

- `entity.[namespace]:[path].name`
- `action.interact.[namespace]:[path]` (`interact_text` in interactions component)
- `item.spawn_egg.entity.[namespace]:[path].name` (Entity spawn egg)

```lang
entity.wiki:custom_entity.name=Custom Entity
action.interact.wiki:ignite=Ignite
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

## Misc

- `chat.[namespace]:[path]` (Message sent in chat)
- `itemGroup.name.[namespace]:[path]` (Creative item group)

```lang
chat.wiki:custom_message=Hello, World!
```
