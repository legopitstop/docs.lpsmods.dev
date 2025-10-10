---
title: "mcutils:guide_book Component | @lpsmods/mc-utils Documentation"
description: Guide book item behavior.
---

# mcutils:guide_book

Guide book item behavior.

## Scripting

You can use `setup` to give new players your guide book.

```js
import { system } from "@minecraft/server";
import { GuideBookComponent } from "@lpsmods/mc-utils";

GuideBookComponent.setup("wiki:guide_book");
```

## Component

### [Options](./info_book.md#options)

## Examples

### Guide Book

<<< @/public/examples/mc-utils/items/guide_book.json{8-19}
