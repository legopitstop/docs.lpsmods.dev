---
title: "custom-effect Command | @lpsmods/mc-utils Documentation"
description: Adds or removes custom status effects of players and entities.
---

# custom-effect

Adds or removes custom status effects of players and entities.

## Syntax

- `custom-effect clear <entity: target> [custom_effect: string]`
  Removes all custom effects or a custom effect.
- `custom-effect give <entity: target> <custom_effect: string> [duration: integer]`
  Gives a custom effect.

## Arguments

- `<entity: target>`
  Specifies the target(s).
- `<custom_effect: string>`
  Any custom effect registered with `customEffectRegistry`.
- `<duration: integer>`
  Specifies the effect's duration in seconds.
