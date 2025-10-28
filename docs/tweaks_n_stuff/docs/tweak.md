---
title: Creating a Tweak | Tweaks & Stuff Plugin
description: Creating a new tweak for Tweaks & Stuff.
---

# Creating a Tweak

1. Create a TypeScript file in `blockbench-plugins/src/tweaks_n_stuff/src/tweaks`
2. Its recommended that this file have the same name as the ID of your tweak.
3. Inside the created file start by creating a class which extends any of the [base tweak](../api/Tweak.md) classes.

   ```ts
   import { ToggleTweak } from "./base";

   class MyCustomTweak extends ToggleTweak {
     constructor() {
       super("my_custom_tweak", { author: "Author", category: "interface" });
     }
   }

   new MyCustomTweak();
   ```

4. Now add functionality to your tweak by overriding the `onEnable`, `onDisable`, `onInstall`, and `onUninstall` methods.
5. Finally, Import your tweak in the `ts/tweaks/index.ts` file.

```ts
import "./my_custom_tweak";
```

## Example

Blockbench's [plugin example](https://www.blockbench.net/wiki/docs/plugin#an-example) using tweaks.

::: code-group

```ts [ts/tweaks/height_randomizer.ts]
import { ToggleTweak } from "./base";

class RandomizeHeightTweak extends ToggleTweak {
  constructor() {
      super("height_randomizer", { author: "Wiki", category: "interface" });
  }
  onEnable() {
    var button = new Action("randomize_height", {
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

```json [ts/lang/en.json]
{
  "settings.randomize_height": "Height Randomizer",
  "settings.randomize_height.desc": "This tweak can randomize the height of all selected cubes.",
  "action.randomize_height": "Randomize Height",
  "action.randomize_height.desc": "Randomize the height of all selected elements"
}
```

:::
