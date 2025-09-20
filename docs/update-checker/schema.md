---
title: Schema | Update Checker Documentation
description: Check to see if you have the latest version of a pack installed.
---

# Schema

## Inside JSON

Inside any JSON file, you can add the below tags to add the schema to help you make your update JSON.

```json
{
  "$schema": "https://legopitstop.github.io/Update_Checker/schema.json"
}
```

## Visual Studio Code

1. Open VSC settings (`Ctrl` + `,`)
1. Open the settings JSON icon on the top right
1. Paste the below JSON inside the settings JSON.

   ```json
   {
     "json.schemas": [
       {
         "name": "Pack Update JSON",
         "description": "A schema for https://legopitstop.github.io/Update_Checker/update-checker.html",
         "fileMatch": ["update.json"],
         "url": "https://legopitstop.github.io/Update_Checker/schema.json"
       }
     ]
   }
   ```

1. Now save the file (`Ctrl` + `s`)
1. Done! If you rename a JSON to `update.json` is should use the schema!
