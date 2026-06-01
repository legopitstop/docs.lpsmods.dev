---
title: Modal Form | @lpsmods/mc-common Documentation
description: Show a modal form.
prev:
  text: Action Form
  link: ./action-form
next:
  text: Paged Action Form
  link: ./paged-action-form
---

# Modal Form

## Creating a modal form

```ts
import { world } from "@minecraft/server";
import { ModalFormHandler, ModalForm } from "@lpsmods/mc-common";

function showBasicModalForm(message: string, status?: number) {
  const players = world.getPlayers();
  const form: ModalForm = {
    title: "Example Modal Controls for ModalForm",
    body: "A simple description.",
    options: {
      toggle: { type: "toggle", label: "Toggle w/o default" },
      toggle2: { type: "toggle", label: "Toggle w/ default", value: true },

      slider: { type: "slider", label: "Slider w/o default", min: 0, max: 50, step: 5 },
      slider2: { type: "slider", label: "Slider w/ default", min: 0, max: 50, step: 5, value: 30 },

      dropdown: { label: "Dropdown w/o default", values: ["option 1", "option 2", "option 3"] },
      dropdown2: { label: "Dropdown w/ default", values: ["option 1", "option 2", "option 3"], value: 2 },

      text: { label: "Input w/o default", placeholder: "type text here" },
      text2: { label: "Input w/o default", placeholder: "type text here", value: "this is default" },
    },
    onSubmit(event) {
      players[0].sendMessage(`Modal form results: ${JSON.stringify(event.formResult, undefined, 2)}`);
    },
  };

  new ModalFormHandler(form).show(players[0]);
}
```
