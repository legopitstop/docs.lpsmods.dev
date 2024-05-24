---
title: Trigger Events
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Trigger Events

Trigger events will run events depending on the trigger event you use. The following parameters hold the events that it will run. see [Item Events](/morenbt/item/events)

## Parameters

```
on_use - Will trigger when the player clicks on the item (only works on some items.)
on_hold - Will trigger when the player holds the item in their `mainhand`
on_use_on - Will trigger when the player clicks on a block.
```

## Example

```snbt
{
    on_use: {...}, // Holds the events that it will run.
    on_hold: {...},
    on_use_on: {...}
}
```
