---
title: Creating a Tweak | Tweaks & Stuff Plugin
description: Creating a new tweak for Tweaks & Stuff.
---

# Creating a Tweak

New tweaks can be added by extending the [Tweak](../api/Tweak.md) class and adding it to Tweak.all. You can then override the [onEnable](../api/Tweak.md#onenable) and [onDisable](../api/Tweak.md#ondisable) methods which behave like onload and onunload in BBPlugin but are called when the user toggles it in settings for convenience.

## Example

Blockbench's [plugin example](https://www.blockbench.net/wiki/docs/plugin#an-example) using tweaks.

```js
class RandomizeHeightTweak extends Tweak {
  constructor() {
    super(
      "height_randomizer",
      "Height Randomizer",
      "This tweak can randomize the height of all selected cubes.",
      "interface"
    );
  }
  onEnable() {
    var button = new Action("randomize_height", {
      name: "Randomize Height",
      description: "Randomize the height of all selected elements",
      icon: "bar_chart",
      click: function () {
        Undo.initEdit({ elements: Cube.selected });
        Cube.selected.forEach((cube) => {
          cube.to[1] = cube.from[0] + Math.floor(Math.random() * 8);
        });
        Canvas.updateView({
          elements: Cube.selected,
          element_aspects: { geometry: true },
          selection: true,
        });
        Undo.finishEdit("Randomize cube height");
      },
    });
    MenuBar.addAction(button, "filter");
    this.deleteables.push(button);
  }
}
```
