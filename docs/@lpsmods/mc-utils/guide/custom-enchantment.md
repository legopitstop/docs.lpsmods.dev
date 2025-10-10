---
title: Custom Enchantment | @lpsmods/mc-utils Documentation
description: Create custom item enchantments using @lpsmods/mc-utils.
prev:
  text: Custom Effect
  link: ./custom-effect
next: false
---

# Custom Enchantment

## Known Limitations

- Enchanted items don't have a glint.
- Unobtainable in the enchanting table.
- Can't merge it in an anvil.
- Enchantment name shows up below all other info (like creative tab, attack damage, vanilla enchants, etc)

## Create an Enchantment

Start by creating your enchantment class; this is where you'll define the logic of your custom enchantment.

```ts
import { ItemUseAfterEvent, Player } from "@minecraft/server";
import { CustomEnchantment } from "@lpsmods/mc-utils";

class ExampleEnchantment extends CustomEnchantment {
  static readonly enchantmentId = "wiki:example";

  constructor() {
    super();
    this.onEnchant = this.onEnchant.bind(this);
    this.onDisenchant = this.onDisenchant.bind(this);
    this.onEnchant = this.onEnchant.bind(this);
  }

  getDisplayName(): string {
    return "Example";
  }

  // Example events

  onEnchant(event: ItemCustomEnchantEvent): void {
    console.log("ENCHANT example enchant");
  }

  onDisenchant(event: ItemCustomDisenchantEvent): void {
    console.log("DISENCHANT example enchant");
  }

  onUse(event: ItemUseAfterEvent): void {
    if (!(event.source instanceof Player)) return;
    event.source.sendMessage("USE example enchant");
  }
}
```

## Register an Enchantment

Now that you've created your enchantment class you need to register it using `customEnchantmentRegistry`.

```ts
import { customEnchantmentRegistry } from "@lpsmods/mc-utils";
import { ExampleEnchantment } from "./enchantment/example.ts";

customEnchantmentRegistry.register(ExampleEnchantment.enchantmentId, new ExampleEnchantment());
```

## Register a Command

Finally, to add your enchantment to an item you need to register the `/custom-enchant` command.

```ts
import { system } from "@minecraft/server";
import { CustomEnchantCommand } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  CustomEnchantCommand.register(event.customCommandRegistry);
});
```
