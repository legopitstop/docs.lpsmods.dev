---
title: Events | LPS Rcore API
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Events

Events are function tags that get triggered when an event happens. These are located `<pack>/data/rcore/tags/functions/<event_id>.json`

## Events

| ID             | Description                                           |
| -------------- | ----------------------------------------------------- |
| `on_parsed`    | Triggers for each parsed recipe                       |
| `on_created`   | Triggers when a table has been created.               |
| `on_destroyed` | Triggers when a table has been destroyed.             |
| `on_crafted`   | Triggers when a recipe has successfully been crafted. |
| `on_dropped`   | Triggers when the table has dropped its item.         |
| `on_executed`  | Triggers when the table has checked for recipes.      |
