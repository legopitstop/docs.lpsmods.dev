---
title: Custom Events | @lpsmods/mc-utils Documentation
description: Subscribe to custom events!
prev:
  text: Custom Enchantment
  link: ./custom-enchantment
next:
  text: Registry
  link: ./registry
---

# Custom Events

## Area

### `entityEnter`

This event fires when a entity enters the area.

```ts
import { AreaEvents } from "@lpsmods/mc-utils";

AreaEvents.entityEnter.subscribe((event) => {
  console.log(`Entered ${event.area.id}`);
});
```

### `entityLeave`

This event fires when a entity leaves the area.

```ts
import { AreaEvents } from "@lpsmods/mc-utils";

AreaEvents.entityLeave.subscribe((event) => {
  console.log(`Exited ${event.area.id}`);
});
```

### `entityTick`

This event fires every tick a entity is in the area.

```ts
import { AreaEvents } from "@lpsmods/mc-utils";

AreaEvents.entityTick.subscribe((event) => {
  console.log(`Ticking in ${event.area.id}`);
});
```

## Block

### `nearbyEntityTick`

This event fires every tick a entity is near a block.

```ts
import { BlockEvents } from "@lpsmods/mc-utils";

BlockEvents.nearbyEntityTick.subscribe((event) => {
  console.log(`Entity nearby ${event.block.typeId}`);
});
```

### `neighborUpdate`

This event fires when a block has updated.

```ts
import { BlockEvents } from "@lpsmods/mc-utils";

BlockEvents.neighborUpdate.subscribe((event) => {
  console.log(`Block update ${event.block.typeId}`);
});
```

## Chunk

### `playerLoad`

This event fires when a player loads a chunk.

```ts
import { ChunkEvents } from "@lpsmods/mc-utils";

ChunkEvents.playerLoad.subscribe((event) => {
  console.log(`Loaded chunk ${event.player.name}`);
});
```

### `playerUnload`

This event fires when a player unloads a chunk.

```ts
import { ChunkEvents } from "@lpsmods/mc-utils";

ChunkEvents.playerUnload.subscribe((event) => {
  console.log(`Unloaded chunk ${event.player.name}`);
});
```

### `loadedTick`

This event fires every tick for player loaded chunks.

```ts
import { ChunkEvents } from "@lpsmods/mc-utils";

ChunkEvents.loadedTick.subscribe((event) => {
  console.log(`Chunk tick ${event.chunk.x},${event.chunk.z}`);
});
```

## Entity

### `mount`

This event fires when a entity mounts.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.mount.subscribe((event) => {
  console.log(`Entity mounted ${event.source.typeId}`);
});
```

### `dismount`

This event fires when a entity dismounts.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.dismount.subscribe((event) => {
  console.log(`Entity dismounted ${event.source.typeId}`);
});
```

### `moved`

This event fires when a entity moves.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.moved.subscribe((event) => {
  console.log(`Entity moved ${event.source.typeId}`);
});
```

### `tick`

This event fires every tick.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.tick.subscribe((event) => {
  console.log(`Entity tick ${event.source.typeId}`);
});
```

### `fallOn`

This event fires when a entity falls on the ground.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.fallOn.subscribe((event) => {
  console.log(`Entity fall ${event.source.typeId}`);
});
```

### `stepOn`

This event fires when a entity steps on a block.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.stepOn.subscribe((event) => {
  console.log(`Entity step on ${event.source.typeId}`);
});
```

### `stepOff`

This event fires when a entity steps off a block.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.stepOff.subscribe((event) => {
  console.log(`Entity step off ${event.source.typeId}`);
});
```

### `enterBlock`

This event fires when an entity enters a block.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.enterBlock.subscribe((event) => {
  console.log(`Entity enter block ${event.source.typeId}`);
});
```

### `leaveBlock`

This event fires when a entity leaves a block.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.leaveBlock.subscribe((event) => {
  console.log(`Entity leave block ${event.source.typeId}`);
});
```

### `inBlockTick`

This event fires every tick a entity is in a block.

```ts
import { EntityEvents } from "@lpsmods/mc-utils";

EntityEvents.inBlockTick.subscribe((event) => {
  console.log(`Entity in block tick ${event.source.typeId}`);
});
```

## Item

### `playerHold`

This event fires when a player holds an item.

```ts
import { ItemEvents } from "@lpsmods/mc-utils";

ItemEvents.playerHold.subscribe((event) => {
  console.log(`Item hold ${event.itemStack.typeId}`);
});
```

### `playerReleaseHold`

This event fires when a player stops holding an item.

```ts
import { ItemEvents } from "@lpsmods/mc-utils";

ItemEvents.playerReleaseHold.subscribe((event) => {
  console.log(`Item release ${event.itemStack.typeId}`);
});
```

### `playerHoldTick`

This event fires every tick the player is holding an item.

```ts
import { ItemEvents } from "@lpsmods/mc-utils";

ItemEvents.playerHoldTick.subscribe((event) => {
  console.log(`Item held tick ${event.itemStack.typeId}`);
});
```

## Screen

### `openScreen`

This event fires when a player opens a screen.

```ts
import { ScreenEvents } from "@lpsmods/mc-utils";

ScreenEvents.nearbyEntityTick.subscribe((event) => {
  console.log(`Opened ${event.screenType}`);
});
```

### `closeScreen`

This event fires when a player closes a screen.

```ts
import { ScreenEvents } from "@lpsmods/mc-utils";

ScreenEvents.nearbyEntityTick.subscribe((event) => {
  console.log(`Closed ${event.screenType}`);
});
```
