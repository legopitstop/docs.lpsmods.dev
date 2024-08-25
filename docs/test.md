---
title: Test
prev: false
next: false
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
:rows="1"
:items="['music_disc_precipice', 'music_disc_creator', 'music_disc_creator_music_box']"/>

### ShapedRecipe

<ShapedRecipe
a1="paper" b1="paper" c1="paper"
a2="paper" b2="paper" c2="paper"
a3="paper" b3="paper" c3="paper"
output="paper"
:count="1"/>

### ShapelessRecipe

<ShapelessRecipe
:ingredients="['paper']"
output="paper"
:count="1"/>

### SmeltingRecipe

<SmeltingRecipe
input="paper"
output="paper"
fuel="coal"/>

### SmithingRecipe

<SmithingRecipe
template="paper"
base="paper"
addition="paper"
output=""/>

### StonecutterRecipe

<StonecutterRecipe
input="paper"
output="paper"
:count="1"/>

## Custom Element Styling

<label for="select">Select</label>

<select id="select" name="select">
  <option>Item 1</option>
  <option>Item 2</option>
  <option>Item 3</option>
</select>

<label for="input">Input</label>

<input id="input" name="input" type="text">

---

<ModelRenderer geometry="/models/armor_stand.geo.json" identifier="geometry.armor_stand" texture="/textures/armor_stand.png" rotate/>
