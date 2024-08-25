---
title: Example Tables | LPS Rcore API
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Tables

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register tables append value {id: "example:my_table", tags: ['example'], nbt: {CustomModelData: 5, display: {Name: '{"translate": "block.example.my_table", "italic": false}'}}}
```

```snbt [snbt]
{
    id: "example:my_table",
    tags: [
        "example"
    ],
    nbt: {
        CustomModelData: 5,
        display: {
            Name: '{"translate": "block.example.my_table", "italic": false}'
        }
    }
}
```

:::
