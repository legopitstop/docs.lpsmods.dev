---
title: Test
recipeItems:
  - id: wiki:custom
    name: Custom
    texture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABeUlEQVR4XmMYBSM+BBhJDQHBwsr/+PS8728nyUymgY4CFmIdAPP56+5mrFquMXwHi9szMIBDiNiQGPwhgO5z33e3UEIgjI8fzDdm4QPT/EFWYJr5TRA4JN4sXoc3TQzeEMDlc5iPYcEA8/nZP5/AQprqymD6eloiTAnekBg6uQDmnVgWcTATluq1GDghUtD8tIrhI0pInGbADwZfCOCK+81CamCv4MoFMH9e3HcezGSThuQKNu9gMF8EWj6g54qhkwZgcQ7zKXpugIkzPf8MYUJDgGHIpQF0B8PiXuX4drBUvakRVj+t+vQRRfzX008MxIDBmwZgcV7+7jHYI7ASrnrDAbweYzORRpH/c+YpXvUDHgI4ayqRWEhtZtrbAvYBev7G5S1Y3MPKgS+z5oOV4qoVBzwECDrg0ef/DCDMQCIA5RZcOQbZqMGbBmCuhKUFDiM3sJButB1KWKCXiI2nz4HlCcU9zJDBHwLoIUFsUiDUFhw0IcAw4gEAnwV2ONU7IWIAAAAASUVORK5CYII="
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
:rows="4"
:items="[
  'music_disc_lava_chicken',
]"/>

<Inventory
title="Spawn Eggs"
:rows="10"
:items="[
 'creaking_spawn_egg',
'zombified_piglin_spawn_egg',
'enderman_spawn_egg',
'mask_spawn_egg',
'zombie_villager_spawn_egg',
'zombie_horse_spawn_egg',
'zombie_spawn_egg',
'zoglin_spawn_egg',
'wolf_spawn_egg',
'wither_skeleton_spawn_egg',
'wither_spawn_egg',
'witch_spawn_egg',
'warden_spawn_egg',
'wandering_trader_spawn_egg',
'vindicator_spawn_egg',
'villager_spawn_egg',
'vex_spawn_egg',
'turtle_spawn_egg',
'tropical_fish_spawn_egg',
'trader_llama_spawn_egg',
'tadpole_spawn_egg',
'strider_spawn_egg',
'stray_spawn_egg',
'squid_spawn_egg',
'spider_spawn_egg',
'snow_golem_spawn_egg',
'sniffer_spawn_egg',
'slime_spawn_egg',
'skeleton_horse_spawn_egg',
'skeleton_spawn_egg',
'silverfish_spawn_egg',
'shulker_spawn_egg',
'sheep_spawn_egg',
'salmon_spawn_egg',
'ravager_spawn_egg',
'rabbit_spawn_egg',
'pufferfish_spawn_egg',
'polar_bear_spawn_egg',
'pillager_spawn_egg',
'piglin_brute_spawn_egg',
'piglin_spawn_egg',
'pig_spawn_egg',
'phantom_spawn_egg',
'parrot_spawn_egg',
'panda_spawn_egg',
'ocelot_spawn_egg',
'npc_spawn_egg',
'mule_spawn_egg',
'mooshroom_spawn_egg',
'magma_cube_spawn_egg',
'llama_spawn_egg',
'iron_golem_spawn_egg',
'husk_spawn_egg',
'horse_spawn_egg',
'hoglin_spawn_egg',
'guardian_spawn_egg',
'goat_spawn_egg',
'glow_squid_spawn_egg',
'ghast_spawn_egg',
'frog_spawn_egg',
'fox_spawn_egg',
'evoker_spawn_egg',
'endermite_spawn_egg',
'ender_dragon_spawn_egg',
'elder_guardian_spawn_egg',
'drowned_spawn_egg',
'donkey_spawn_egg',
'dolphin_spawn_egg',
'creeper_spawn_egg',
'cow_spawn_egg',
'cod_spawn_egg',
'chicken_spawn_egg',
'cave_spider_spawn_egg',
'cat_spawn_egg',
'camel_spawn_egg',
'breeze_spawn_egg',
'bogged_spawn_egg',
'blaze_spawn_egg',
'bee_spawn_egg',
'bat_spawn_egg',
'axolotl_spawn_egg',
'armadillo_spawn_egg',
'allay_spawn_egg',
'agent_spawn_egg',
'happy_ghast_spawn_egg'
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
