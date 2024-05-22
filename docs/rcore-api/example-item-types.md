---
title: Example Item Types
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Item Types

```mcfunction
data modify storage rcore:register item_types append value {id: "example:my_item_type", function: "example:my_item_type/drop"}
```

Using the item type in a item

```mcfunction
data modify storage rcore:register items append value {id: "example:my_item", type: 'example:my_item_type', ...}
```
