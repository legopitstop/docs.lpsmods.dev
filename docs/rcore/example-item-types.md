---
title: Example Item Types | LPS Rcore API Documentation
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Item Types

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register item_types append value {id: "example:my_item_type", function: "example:my_item_type/drop"}
```

```snbt [snbt]
{
    id: "example:my_item_type",
    function: "example:my_item_type/drop"
}
```

:::

Using the item type in a item

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register items append value {id: "example:my_item", type: 'example:my_item_type', ...}
```

```snbt [snbt]
{
    id: "example:my_item",
    type: "example:my_item_type"
}
```

:::
