---
title: Add-On Scheme
description: Project scheme for Minecraft Bedrock Add-Ons.
---

# Add-On Scheme

Project scheme for Minecraft Bedrock Add-Ons.

<!-- Behavior Pack -->

## Item Catalog

```txt
📁BP/
└── 📁item_catalog/
    └── 📃crafting_item_catalog.json
```

## Biome

```txt
📁BP/
└── 📁biomes/[CREATOR]/[ABBR]/
    └── 📃[NAME].biome.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Block

```txt
📁BP/
└── 📁blocks/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Entity

```txt
📁BP/
└── 📁entities/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Feature

```txt
📁BP/
└── 📁features/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[CREATOR]/[ABBR]/[NAME]`

```txt
lpsm_tst:lpsm/tst/custom
```

## Feature Rule

```txt
📁BP/
└── 📁feature_rules/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[CREATOR]/[ABBR]/[NAME]`

```txt
lpsm_tst:lpsm/tst/custom
```

## Item

```txt
📁BP/
└── 📁items/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Functions

```txt
📁BP/
└── 📁functions/[CREATOR]/[ABBR]/
    └── 📃[NAME].mcfunction
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Jigsaw Structure

```txt
📁BP/
└── 📁worldgen/structures/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Structure Set

```txt
📁BP/
└── 📁worldgen/structure_sets/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Template Pool

```txt
📁BP/
└── 📁worldgen/template_pools/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Processor

```txt
📁BP/
└── 📁worldgen/processors/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Recipe

```txt
📁BP/
└── 📁recipes/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Loot Table

```txt
📁BP/
└── 📁loot_tables/[CREATOR]/[ABBR]/
    ├── 📁blocks/
    │   └── 📃[NAME].json
    ├── 📁chests/
    │   └── 📃[NAME].json
    ├── 📁dispensers/
    │   └── 📃[NAME].json
    ├── 📁entities/
    │   └── 📃[NAME].json
    ├── 📁equipment/
    │   └── 📃[NAME].json
    ├── 📁gameplay/
    │   └── 📃[NAME].json
    ├── 📁pots/
    │   └── 📃[NAME].json
    └── 📁spawners/
        └── 📃[NAME].json
```

## Spawn Rule

```txt
📁BP/
└── 📁spawn_rules/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Camera

```txt
📁BP/
└── 📁cameras/presets/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Dialogue

```txt
📁BP/
└── 📁dialogue/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Trading

```txt
📁BP/
└── 📁trading/[CREATOR]/[ABBR]/
    ├── 📃[NAME].json
    └── 📁economy_trades/
        └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Spawn Group

```txt
📁BP/
└── 📁spawn_groups/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Structure

```txt
📁BP/
└── 📁structures/[CREATOR]_[ABBR]/
    └── 📃[NAME].mcstructure
```

<!-- Resource Pack -->

## Animation Controller

```txt
📁RP/
└── 📁animation_controllers/[CREATOR]/[ABBR]/
    └── 📃[NAME].animation_controllers.json
    └── 📃[NAME].ac.json
```

- `controller.animation.[CREATOR]_[ABBR].[NAME]`

```txt
controller.animation.lpsm_tst.custom
```

## Animation

```txt
📁RP/
└── 📁animations/[CREATOR]/[ABBR]/
    └── 📃[NAME].animation.json
```

- `animation.[CREATOR]_[ABBR].[NAME]`

```txt
animation.lpsm_tst.custom
```

## Geometry

```txt
📁RP/
├── 📁models/entity/[CREATOR]/[ABBR]/
│   └── 📃[NAME].geo.json
├── 📁models/blocks/[CREATOR]/[ABBR]/
│   └── 📃[NAME].geo.json
```

- `geometry.[CREATOR]_[ABBR]_[NAME]`

```txt
geometry.lpsm_tst_custom
```

## Render Controller

```txt
📁RP/
└── 📁render_controllers/[CREATOR]/[ABBR]/
    └── 📃[NAME].render_controllers.json
    └── 📃[NAME].rc.json
```

- `controller.render.[CREATOR]_[ABBR].[NAME]`

```txt
controller.render.lpsm_tst.custom
```

## Attachable

```txt
📁RP/
└── 📁attachables/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Client Entity

```txt
📁RP/
└── 📁entity/[CREATOR]/[ABBR]/
    └── 📃[NAME].entity.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Client Biome

```txt
📁RP/
└── 📁biomes/[CREATOR]/[ABBR]/
    └── 📃[NAME].client_biome.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Block Culling

```txt
📁RP/
└── 📁block_culling/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Fog

```txt
📁RP/
└── 📁fogs/[CREATOR]/[ABBR]/
    └── 📃[NAME]_fog_setting.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Particle

```txt
📁RP/
└── 📁particles/[CREATOR]/[ABBR]/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Sounds

```txt
📁RP/
├── 📃sounds.json
└── 📁sounds/[CREATOR]/[ABBR]/
    ├── 📁item/
    │   └── 📃[NAME].ogg
    ├── 📁block/
    │   └── 📃[NAME].ogg
    ├── 📁mob/
    │   └── 📃[NAME].ogg
    ├── 📃sound_definitions.json
    └── 📃music_definitions.json
```

- `[CREATOR]_[ABBR]:item.[NAME]`
- `[CREATOR]_[ABBR]:block.[NAME]`
- `[CREATOR]_[ABBR]:entity.[NAME]`

```txt
lpsm_tst:item.custom
lpsm_tst:block.custom
lpsm_tst:entity.custom
```

## Textures

```txt
📁RP/
└── 📁textures/[CREATOR]/[ABBR]/
    ├── 📁blocks/
    │   ├── 📃[NAME].png
    │   └── 📃[NAME].texture_set.json
    ├── 📁items/
    │   ├── 📃[NAME].png
    │   └── 📃[NAME].texture_set.json
    ├── 📁entity/
    │   ├── 📃[NAME].png
    │   └── 📃[NAME].texture_set.json
    ├── 📁models/armor/
    │   ├── 📃[NAME].png
    │   └── 📃[NAME].texture_set.json
    ├── 📁particles/
    │   ├── 📃[NAME].png
    │   └── 📃[NAME].texture_set.json
    └── 📁misc/
        ├── 📃[NAME].png
        └── 📃[NAME].texture_set.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Material

```txt
📁RP/
└── 📁material/
    └── 📃entity.material
```

- `[CREATOR]_[ABBR]_[NAME]:[PARENT]`

```txt
lpsm_tst_custom:entity_alphatest
```

## Atmospherics

```txt
📁RP/
└── 📁atmospherics/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Color Grading

```txt
📁RP/
└── 📁color_grading/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Lighting

```txt
📁RP/
└── 📁lighting/
    └── 📃[NAME].json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```

## Local Lighting

```txt
📁RP/
└── 📁local_lighting/
    └── 📃local_lighting.json
```

## PBR

```txt
📁RP/
└── 📁pbr/
    └── 📃global.json
```

## Point Light

```txt
📁RP/
└── 📁point_lights/
    └── 📃global.json
```

## Shadow

```txt
📁RP/
└── 📁shadows/
    └── 📃global.json
```

## Water

```txt
📁RP/
└── 📁water/
    └── 📃water.json
```

- `[CREATOR]_[ABBR]:[NAME]`

```txt
lpsm_tst:custom
```
