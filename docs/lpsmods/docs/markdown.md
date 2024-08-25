---
title: Markdown Extensions | docs.lpsmods.dev
---

# Markdown Extensions

## Syntax Highlighting

Additional supported languages

| Scope        | Source                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `snbt`       | [snbt.tmLanguage.json](https://github.com/Tnze/snbt-vscode/blob/main/syntaxes/snbt.tmLanguage.json)                                              |
| `mcfunction` | [mcfunction.tmLanguage.json](https://github.com/Arcensoth/language-mcfunction/blob/main/mcfunction.tmLanguage.json)                              |
| `lang`       | [lang.tmLanguage.json](https://github.com/TartaricAcid/VSCodeMinecraftLangPlugins/blob/master/syntaxes/lang.tmLanguage.json)                     |
| `molang`     | [molang.tmLanguage.json](https://github.com/Blockception/VSCode-Bedrock-Development-Extension/blob/main/minecraft-molang/syntax.tmLanguage.json) |
| `mcscript`   | [mcscript.tmLanguage.json](https://github.com/Stevertus/mcscript)                                                                                |

```snbt
{
  string: "hello world",
  integer: 1,
  array: ["item1", "item2"],
  object: {
    string: "Something"
  },
  rawjson: '{"text": "Hello World"}'
}
```

```mcfunction
# Inline Comment
give @s minecraft:stone{CustomModelData:1}
```

```lang
## Inline Comment
item.namespace.thing=§lThing %s
tile.namespace.thing_block.name=Thing Block
```

```molang
v.x = 0;
for_each(v.pig, query.get_nearby_entities(4, 'minecraft:pig'), {
    v.x = v.x + v.pig->query.get_relative_block_state(0, 1, 0, 'flammable');
});
```

```mcscript
## Inline comment
if(@s){
  /say entity found
} else {
  /say else command
}
```
