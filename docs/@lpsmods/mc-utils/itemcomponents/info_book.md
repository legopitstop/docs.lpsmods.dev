---
title: "mcutils:info_book Component | @lpsmods/mc-utils Documentation"
description: A simple UI guide book for add-ons.
---

# mcutils:info_book

A simple UI guide book for add-ons.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { InfoBookComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(InfoBookComponent.typeId, new InfoBookComponent());
});
```

## Component

### Options

| Name                  | Type                        | Default                   | Description |
| --------------------- | --------------------------- | ------------------------- | ----------- |
| `developer_mode`      | boolean                     | `false`                   |             |
| `default`             | string                      | `home`                    |             |
| `translation_pattern` | string                      | `guide.{NAMESPACE}:{KEY}` |             |
| `back_button`         | [Back Button](#back-button) |                           |             |
| `mcutils:search`      | [Search](#search)           |                           |             |

#### Back Button

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| `label`          |         |             |
| `icon`           |         |             |
| `top_margin`     | number  |             |
| `bottom_margin`  | number  |             |
| `bottom_divider` | boolean |             |
| `top_divider`    | boolean |             |

#### Search

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| `include_buttons`       | boolean |             |
| `include_titles`        | boolean |             |
| `title`                 | string  |             |
| `body`                  | string  |             |
| `include_titles_label`  | string  |             |
| `include_buttons_label` | string  |             |
| `result_title`          | string  |             |
| `result_body`           | string  |             |

## Examples

### Guide Book

<<< @/public/examples/mc-utils/items/guide_book.json{8-19}
