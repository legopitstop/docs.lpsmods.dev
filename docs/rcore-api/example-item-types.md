---
title: Example Item Types
---

# Example Item Types

```mcfunction
data modify storage rcore:register item_types append value {id: "example:my_item_type", function: "example:my_item_type/drop"}
```

Using the item type in a item

```mcfunction
data modify storage rcore:register items append value {id: "example:my_item", type: 'example:my_item_type', ...}
```
