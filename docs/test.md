---
title: Test
recipeItems:
  - id: wiki:custom
    name: Custom
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABeUlEQVR4XmMYBSM+BBhJDQHBwsr/+PS8728nyUymgY4CFmIdAPP56+5mrFquMXwHi9szMIBDiNiQGPwhgO5z33e3UEIgjI8fzDdm4QPT/EFWYJr5TRA4JN4sXoc3TQzeEMDlc5iPYcEA8/nZP5/AQprqymD6eloiTAnekBg6uQDmnVgWcTATluq1GDghUtD8tIrhI0pInGbADwZfCOCK+81CamCv4MoFMH9e3HcezGSThuQKNu9gMF8EWj6g54qhkwZgcQ7zKXpugIkzPf8MYUJDgGHIpQF0B8PiXuX4drBUvakRVj+t+vQRRfzX008MxIDBmwZgcV7+7jHYI7ASrnrDAbweYzORRpH/c+YpXvUDHgI4ayqRWEhtZtrbAvYBev7G5S1Y3MPKgS+z5oOV4qoVBzwECDrg0ef/DCDMQCIA5RZcOQbZqMGbBmCuhKUFDiM3sJButB1KWKCXiI2nz4HlCcU9zJDBHwLoIUFsUiDUFhw0IcAw4gEAnwV2ONU7IWIAAAAASUVORK5CYII="
    lore:
      -
      - "§7When in main hand:"
      - "§2\t1.6 Attack Speed"
      - "§2\t4 Attack Damage"

recipeLinks:
  - namespace: wiki
    pattern: https://example.com/:name

advancedTooltips: always
---

# Test

This page is for testing custom components.

## Recipe

### Inventory

<Inventory
title="Items"
:rows="8"
:items="[
'copper_chest',
'exposed_copper_chest',
'weathered_copper_chest',
'oxidized_copper_chest',
'waxed_copper_chest',
'waxed_exposed_copper_chest',
'waxed_weathered_copper_chest',
'waxed_oxidized_copper_chest',
'oak_shelf',
'spruce_shelf',
'birch_shelf',
'jungle_shelf',
'acacia_shelf',
'dark_oak_shelf',
'mangrove_shelf',
'cherry_shelf',
'pale_oak_shelf',
'bamboo_shelf',
'crimson_shelf',
'warped_shelf',
'copper_golem_statue',
'exposed_copper_golem_statue',
'weathered_copper_golem_statue',
'oxidized_copper_golem_statue',
'waxed_copper_golem_statue',
'waxed_exposed_copper_golem_statue',
'waxed_weathered_copper_golem_statue',
'waxed_oxidized_copper_golem_statue',
'exposed_lightning_rod',
'weathered_lightning_rod',
'oxidized_lightning_rod',
'waxed_lightning_rod',
'waxed_exposed_lightning_rod',
'waxed_weathered_lightning_rod',
'waxed_oxidized_lightning_rod',
'copper_golem_spawn_egg',
'copper_sword',
'copper_axe',
'copper_pickaxe',
'copper_shovel',
'copper_hoe',
'copper_helmet',
'copper_chestplate',
'copper_leggings',
'copper_boots',
'copper_horse_armor',
'copper_nugget',
'copper_torch',
'copper_lantern',
'exposed_copper_lantern',
'weathered_copper_lantern',
'oxidized_copper_lantern',
'waxed_copper_lantern',
'waxed_exposed_copper_lantern',
'waxed_weathered_copper_lantern',
'waxed_oxidized_copper_lantern',
'copper_bars',
'exposed_copper_bars',
'weathered_copper_bars',
'oxidized_copper_bars',
'waxed_copper_bars',
'waxed_exposed_copper_bars',
'waxed_weathered_copper_bars',
'waxed_oxidized_copper_bars',
'copper_chain',
'exposed_copper_chain',
'weathered_copper_chain',
'oxidized_copper_chain',
'waxed_copper_chain',
'waxed_exposed_copper_chain',
'waxed_weathered_copper_chain',
'waxed_oxidized_copper_chain',
]"/>

### ShapedRecipe

<ShapedRecipe
a1="paper" b1="paper" c1="paper"
a2="paper" b2="paper" c2="paper"
a3="paper" b3="paper" c3="paper"
output="wiki:custom"
:count="2"/>

### ShapelessRecipe

<ShapelessRecipe
:ingredients="['paper']"
output="wiki:custom"
:count="2"/>

### SmeltingRecipe

<SmeltingRecipe
input="paper"
output="wiki:custom"
fuel="coal"/>

### SmithingRecipe

<SmithingRecipe
template="paper"
base="paper"
addition="paper"
output="wiki:custom"/>

### StonecutterRecipe

<StonecutterRecipe
input="paper"
output="wiki:custom"
:count="2"/>

## Custom Element Styling

<label for="select">Select</label>

<select id="select" name="select">
  <option>Item 1</option>
  <option>Item 2</option>
  <option>Item 3</option>
</select>

<label for="input">Input</label>

<input id="input" name="input" type="text">

## Misc

### ModelRenderer

<ModelRenderer geometry="/models/armor_stand.geo.json" identifier="geometry.armor_stand" texture="/textures/armor_stand.png" rotate/>

### ArmorStandGenerator

### MusicDiscStudio
