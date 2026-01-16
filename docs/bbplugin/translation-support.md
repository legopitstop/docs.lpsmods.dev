---
title: Adding Translation Support
description: Translation support lets people use your plugin in their own language.
---

# Adding Translation Support

Translation support lets people use your plugin in their own language.

## Creating a language loader file

Create a file called `languages.ts` in your source folder. This file loads all translation files and registers them.

> [!INFO]
> Including all languages up front means translators only need to edit the JSON files.

```ts
import cz from "./lang/cz.json";
import de from "./lang/de.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import fr from "./lang/fr.json";
import it from "./lang/it.json";
import ja from "./lang/ja.json";
import ko from "./lang/ko.json";
import nl from "./lang/nl.json";
import pl from "./lang/pl.json";
import pt from "./lang/pt.json";
import ru from "./lang/ru.json";
import sv from "./lang/sv.json";
import uk from "./lang/uk.json";
import vi from "./lang/vi.json";
import zh_tw from "./lang/zh_tw.json";
import zh from "./lang/zh.json";
Language.addTranslations("cz", cz);
Language.addTranslations("de", de);
Language.addTranslations("en", en);
Language.addTranslations("es", es);
Language.addTranslations("fr", fr);
Language.addTranslations("it", it);
Language.addTranslations("ja", ja);
Language.addTranslations("ko", ko);
Language.addTranslations("nl", nl);
Language.addTranslations("pl", pl);
Language.addTranslations("pt", pt);
Language.addTranslations("ru", ru);
Language.addTranslations("sv", sv);
Language.addTranslations("uk", uk);
Language.addTranslations("vi", vi);
Language.addTranslations("zh_tw", zh_tw);
Language.addTranslations("zh", zh);
```

## Load the translations

Import `languages.ts` in your main plugin file so the translations are registered when the plugin loads.

## Add language files

Create a `lang` folder. Inside it, add all the JSON files listed in `languages.ts`

> [!NOTE]
> Each file should start with empty braces:

```json
{}
```

## Add English text

Open `en.json` and add your translation keys and text.

```json
{
  "action.randomize_height": "Randomize Height",
  "action.randomize_height.desc": "Randomize the height of all selected elements"
}
```

Other language files will use the same keys, but with translated text.

## Use translations in your plugin

Remove the `name` and `description` fields from your action. Blockbench will automatically use the translation files.

To show translated text in code, use the `tl` function:

```ts
Blockbench.showQuickMessage(tl("<your-translation-key>"));
```

That is all you need to add basic translation support to your plugin.
