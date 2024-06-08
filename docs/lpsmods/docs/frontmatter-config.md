---
title: Frontmatter Config
recipeItems:
  - id: wiki:custom
    name: Custom
    texture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABSUlEQVR4nOWWYXKDIBCFH50exqjHoeY6XKcTchtNvA39Ac92NyqxdkYy3T+6yy7yviwQAyBgh4Wwqxxvu6r/wN75MikxhoH5ijRuHsI6sm78XjkEJksrGxYUNZqUsj70sR43AMDZdAAAGywAwBsv8ssj8Jn5LZvMhNs6oUQCfabgnBk3MOKp49pej0De5DnhggMA3DDMZpdHgOvU5+DW7tYklmY4nIDBv78N9yrYegtqO54AX55VMgyRWF3Pj+eI6u+UQ4CboUnXHRXS/35GBVop/apaJ8k8kiiHwLTuIAPOSUXsAW3WxrxxlOP2g/8xZR6tHAIPulLAOdn1Sz3QtsyXCv1F5nH8eo3+4QRMSFK4Pam0Tl3fKr/rJAF2M33v13eBtYXtgh8EnjsJ+7QLmkSGdfd79Ktq/SQcx5h/OkW/HAK/nuDVb8Mvx6Jxoi+Ri3YAAAAASUVORK5CYII="
---

# Frontmatter Config

In addition to the built-in [vitepress frontmatter](https://vitepress.dev/reference/frontmatter-config) options these docs contain its own fontmatter options.

## recipeItems

- Type: `Item[]`

Defines custom items for recipe components.

```yaml
---
recipeItems:
  - id: wiki:custom
    name: §bCustom
    texture: data:image/png;base64,iVBOR...
    lore: - §7Something
---
```

## recipeLinks

- Type: `Link[]`

Defines custom links for [recipeItems](#recipeitems).

```yaml
---
recipeLinks:
  - namespace: wiki
    pattern: https://docs.lpsmods.dev/:name
---
```

## redirect

- Type: `String`

Redirects from this page to a new one.

```yaml
---
redirect: /python-docs
---
```
