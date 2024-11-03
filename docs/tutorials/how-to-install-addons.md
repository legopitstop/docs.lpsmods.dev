---
title: How to Install Add-Ons
description: Step-by-step instructions on how to install addons for Minecraft Bedrock Edition
---

# How to Install Add-Ons

<!-- TODO: Other OS need screenshots -->

Step-by-step instructions on how to install addons for [Minecraft: Bedrock Edition](https://minecraft.wiki/w/Bedrock_Edition)

## Windows

1. Navigate to the directory where you downloaded the file.
1. Double click on the file and the add-on should open in Minecraft.

::: info
If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported the pack.
:::

## Realms/Console

1. You will need a Windows 10 or Windows 11 computer with Minecraft installed and, a subscription to Realms.
1. On the computer, launch Minecraft and upload the world with add-ons active to your realm.
1. Go to your console, launch Minecraft, and open the add-on enchanted world on the realm.

## Android

<iframe width=auto height="auto" src="https://www.youtube.com/embed/I11vamzdrbU" title="How To Download Mods &amp; Addons For Minecraft Bedrock 1.20! (Android, IOS, Windows 11, Xbox, PS5)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
(Video by FryBry)

1. Launch Minecraft.
1. Go to the Settings app and select Storage > Explore (at the bottom). If you do not have a settings app, you can install a file explorer app like [File Manager](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager).
1. Select the directory where you saved the file, usually "Download".
1. Select the file and the add-on should open in Minecraft.

::: warning
If the downloaded file ends in `.zip` you will need to remove it by renaming it. For example: `LotsMoreFood.mcpack.zip` should be `LotsMoreFood.mcpack`
:::

## iOS

1. Launch Minecraft.
1. Click on the world or add-on file you want to open.
1. Your device will prompt you to open the file with Minecraft.
1. Click `Open` in Minecraft; This will launch Minecraft with your selected file.

::: info
If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported pack.
:::

## Dedicated Server

1. Download the add-on that you want to install. It should be in a .mcpack or .mcaddon format.
1. Rename the file extension to ".zip"

![step2](/images/1967d4a4-70ad-4b69-bec5-454cf98586ca.png)

1. Extract all contents of the file

![step3](/images/6463c400-8473-463d-a472-99aef2d48288.png)

1. If the extracted file contains .mcpack files repeat steps 2 and 3 for these files.
1. Upload these extracted folders to the appropriate places in your file manager. These folders typically have a prefix or suffix of RP (for resource_packs) and BP (for behavior_packs)

![step6](/images/3ab1fe98-81b5-4213-8996-b5b36dab4543.png)

1. Now you need to activate the addon by navigating to your server's world folder and create 2 seperate files. One called "world_behavior_packs.json" and the other called "world_resource_packs.json"

![step7](/images/9ba5e811-6d62-4e8f-a086-683172640d5d.png)

1. For each of the created files you will need to edit them and add the following content making sure to replace the pack_id value with the uuid located in the packs manifest.json along with the version.

```json
[
    {
        "pack_id": "uuid here",
        "version": [version number here]
    }
]
```

The final file should look something like this. Making note of commas to activate multiple packs.

```json
[
  {
    "pack_id": "af0b7860-1309-46ce-bcd4-d2352d62b71c",
    "version": [1, 2, 0]
  },
  {
    "pack_id": "59b36f01-7dee-4316-9e2c-b68d429c1090",
    "version": [1, 5, 2]
  }
]
```

1. After activating the addon you can now start your server and you will have extra content added to your server!
   ![step8](/images/3f19aaeb-7eb6-48b3-81aa-2d8b3d770953.png)
