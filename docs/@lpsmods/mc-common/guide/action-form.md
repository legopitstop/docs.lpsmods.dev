---
title: Action Form | @lpsmods/mc-common Documentation
description: Show an action form.
prev:
  text: Getting Started
  link: ./getting-started
next:
  text: Modal Form
  link: ./modal-form
---

# Action Form

## Creating an action form

```ts
import { world } from "@minecraft/server";
import { ActionFormHandler, ActionForm } from "@lpsmods/mc-common";

function showActionForm() {
    const players = world.getPlayers();
    const form: ActionForm = {
    title: "Test Title",
    body: "Body text here!",
    buttons: [
        {
            label: "btn 1",
            onClick(event) {
                console.log("You clicked 1");
            }
        },
        {
            label: "btn 2",
            onClick(event) {
                console.log("You clicked 2");
            }
        },
        {
            label: "btn 3",
            onClick(event) {
                console.log("You clicked 3");
            }
        },
        {
            label: "btn 4",
            onClick(event) {
                console.log("You clicked 4");
            }
        }
        {
            label: "btn 5",
            onClick(event) {
                console.log("You clicked 5");
            }
        }
    ],
    };

    new ActionFormHandler(form).show(players[0]);
}
```
