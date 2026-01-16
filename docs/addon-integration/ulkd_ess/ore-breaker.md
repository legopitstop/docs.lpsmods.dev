---
title: Ore Breaker | Essentials Integration
description: To make your custom ore blocks compatible with the Essentials Add-on's Ore Breaker feature, you need to add a specific tags to your ore blocks.
---

# Ore Breaker

To make your custom ore blocks compatible with the Essentials Add-on's Ore Breaker feature, you need to add a specific tags to your ore blocks.

> [!INFO]
> Contents of this page are from the Unlinked discord.

## Ore Tag

This tag should be added to all ore blocks of your custom ore type. Replace `<group>` with the appropriate group name for your ore type.

```txt
ulkd_ess:ore_<group>
```

## Example

For an iron ore, you would add the following tags:

- `ulkd_ess:ore_iron` for `minecraft:iron_ore`
- `ulkd_ess:ore_iron` for `minecraft:deepslate_iron_ore`

For a custom ore, you would add the following tags:

- `ulkd_ess:ore_wiki:my_ore` for `wiki:my_ore`
- `ulkd_ess:ore_wiki:my_ore` for `wiki:deepslate_my_ore`
