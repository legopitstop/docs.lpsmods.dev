---
title: mcaddon Documentation
description: Utility functions for creating Minecraft Bedrock Add-Ons.
keywords: legopitstop,python,minecraft,json,pypi,resourcepack,development-kit,add-on,bedrock-edition,mcpack,pythonpackage,behaviorpack,mcaddon
---

# mcaddon

Utility functions for creating Minecraft Bedrock Add-Ons.

## Links

- :pie: [PyPI](https://pypi.org/project/mcaddon)
- :file_folder: [Download](https://github.com/legopitstop/mcaddon/releases)
- :gear: [Source Code](https://github.com/legopitstop/mcaddon)

## Installation

Install the module with pip:

```bat
pip3 install mcaddon
```

Update existing installation: `pip3 install mcaddon --upgrade`

## Examples

### Block

```Python
from mcaddon import *

blk = Block('test:on_interact_change_state_block')
blk.add_component(OnInteractComponent(event='test_event'))
blk.add_event('test_event', SetBlockProperty({'custom:direction': "1"}))
blk.save('block.json')
```

### Item

```Python
from mcaddon import *

blk = Item('minecraft:blaze_rod')
blk.add_component(FuelComponent(12.0))
blk.add_component(MaxStackSizeComponent(64))
blk.add_component(IconComponent('blaze_rod'))
blk.add_component(HandEquippedComponent(True))
blk.add_component(DisplayNameComponent('Blaze Rod'))
blk.save('item.json')
```
