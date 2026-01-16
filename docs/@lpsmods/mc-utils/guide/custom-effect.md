---
title: Custom Effect | @lpsmods/mc-utils Documentation
description: Create custom mob effects using @lpsmods/mc-utils.
prev:
  text: Custom Components
  link: ./custom-components
next:
  text: Custom Enchantment
  link: ./custom-enchantment
---

# Custom Effect

![Example custom effect](/images/47b79bdf-d43c-49f8-af4b-28301f512655.png)

## Known Limitations

- Custom effects won't show up in the mob effects screen or on the side of the screen.

## Create an Effect

Start by creating your effect class; this is where you'll define the logic of your custom effect.

```ts
import { CustomEffect, CustomEffectTickEvent, CustomEffectStartEvent, CustomEffectEndEvent } from "@lpsmods/mc-utils";

class ExampleEffect extends CustomEffect {
  static readonly effectId = "wiki:example";

  constructor() {
    super();
    this.onTick = this.onTick.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  // Example events

  onTick(event: CustomEffectTickEvent): void {
    if (!(event.entity instanceof Player)) return;
    event.entity.onScreenDisplay.setActionBar("TICK example effect");
  }

  onStart(event: CustomEffectStartEvent): void {
    if (!(event.entity instanceof Player)) return;
    event.entity.sendMessage("START example effect");
  }

  onEnd(event: CustomEffectEndEvent): void {
    if (!(event.entity instanceof Player)) return;
    event.entity.sendMessage("END example effect");
  }
}
```

## Register an Effect

Now that you've created your effect class you need to register it using `customEffectRegistry`.

```ts
import { customEffectRegistry } from "@lpsmods/mc-utils";
import { ExampleEffect } from "./effect/example.ts";

customEffectRegistry.register(ExampleEffect.effectId, new ExampleEffect());
```

## Applying Your Effect

You can apply the effect through code or by registering and using the custom effect command.

### Code

```ts
import { CustomEffectUtils } from "@lpsmods/mc-utils";

// Give effect
CustomEffectUtils.add(entity, "wiki:example", 20);

// Clear effect
CustomEffectUtils.add(entity, "wiki:example");
```

### Command

Finally, to add your effect to entities you need to register the `/custom-effect` command.

```ts
import { system } from "@minecraft/server";
import { CustomEffectCommand } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  CustomEffectCommand.register(event.customCommandRegistry);
});
```

```txt
/custom-effect give @s wiki:example 20 0 true
```
