---
title: durablity
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# durablity

Custom durability for this item. Note that 'display' and 'custom_display' are a bit buggy aka doesn't properly display percentage.

## Parameters

```
durability - The root tag.
 ├ max_durability: (int) The max amount of damage the item has.
 ├ display: How to display the damage, leave blank to not show. Valid Strings: "actionbarText", "actionbarBar", "actionbarPercent","title"
 | ├ type: (enum) The type of display to use. Valid Strings: "bossbar", "custom", "customDurability", "actionbarBar"
 | ├ value: (RAW JSON) type=custom This is the exact text to use for the actionbar. type=customDurability This is the text to apply after the current and max amounts. type=bossbar, name=custom This is the exact text to use for the bossbar.type=bossbar, name=customDurability This is the text to apply after the current and max amounts.
 | ├ color: (enum) type=bossbar This the color of the boss bar. Excepted values; default, blue, green, pink, purple, red, white, yellow
 | ├ name: (enum) type=bossbar This the name of the boss bar. Excepted values; none, default, customisability, durability, percent, custom
 | └ color_theme: (enum) type=actionbarBar This the the color of the `actionbarBar`. Preset themes; aqua, blue, gray, green, purple, red, yellow, white
Custom Colored Themes; orange, brown, cyan, pink
 | └ color_theme:
 |   ├ progress: (enum) The color of the progress bar. excepts all chat colors.
 |   └ background: (enum) The color of the background. excepts all chat colors.
 └ custom_display: add a custom display for durability.
   ├ location: (enum) Where to display the text. Valid Strings: "actionbar"
   └ values: (RAW JSON array) An array of Raw JSON formatted text to show at that value in 10% increments. [0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%]
```

## Example

Simple example

```snbt
{
  durability: {
    max_durability: 500,
    display: "actionbarBar"
  }
}
```

Advanced example

```snbt
{
  durabilty: {
    max_durability: 500,
    display: {
      type: "actionbarBar",
      color_theme: "orange"
    },
    custom_display: {
      location: "actionbar",
      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  }
}
```
