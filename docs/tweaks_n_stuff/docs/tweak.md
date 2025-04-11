---
title: Creating a Tweak | Tweaks & Stuff Plugin
description: Creating a new tweak for Tweaks & Stuff.
---

# Creating a Tweak

1. Create a JavaScript file in `blockbench-plugins/src/tweaks_n_stuff/src/tweaks`
2. Its recommended that this file have the same name as the ID of your tweak.
3. Inside the created file start by creating a class which extends any of the [base tweak](../api/Tweak.md) classes.

   ```js
   import { ToggleTweak } "./index.js";
   class MyCustomTweak extends ToggleTweak {
    constructor() {
      super(
        "my_custom_tweak",
        "My Custom Tweak",
        "Author",
        "This is a custom tweak",
        "interface"
      );
    }
   }
   ```

4. Now add functionality to your tweak by overriding the `onEnable`, `onDisable`, `onInstall`, and `onUninstall` methods.
5. Finally, Import your tweak in the `blockbench-plugins/src/tweaks_n_stuff/src/index.js` file.

   ```js
   import "./tweaks/my_custom_tweak.js";
   ```

## Example

Blockbench's [plugin example](https://www.blockbench.net/wiki/docs/plugin#an-example) using tweaks.

```js
import { ToggleTweak } from "./index.js";

class RandomizeHeightTweak extends ToggleTweak {
  constructor() {
    super(
      "height_randomizer",
      "Height Randomizer",
      "This tweak can randomize the height of all selected cubes."
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

// Register your tweak.
ToggleTweak.register(new CloseActionsTweak());

```
