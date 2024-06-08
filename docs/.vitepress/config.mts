import { defineConfig } from "vitepress";
import mcfunctionGrammar from "./theme/syntaxes/mcfunction.tmLanguage.json";
import snbtGrammar from "./theme/syntaxes/snbt.tmLanguage.json";
import langGrammar from "./theme/syntaxes/lang.tmLanguage.json";
import molangGrammar from "./theme/syntaxes/molang.tmLanguage.json";
import mcscriptGrammar from "./theme/syntaxes/mcscript.tmLanguage.json";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Legopitstop Docs",
  description: "Documentation for all my projects",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#ff8800" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "Legopitstop Docs" }],
    ["meta", { property: "og:site_name", content: "Legopitstop Docs" }],
    ["meta", { property: "og:image", content: "/images/logo.png" }],
    ["meta", { property: "og:url", content: "https://docs.lpsmods.dev/" }],
  ],
  transformPageData(pageData) {
    pageData.titleTemplate = ":title | Legopitstop Docs";
    if (pageData.frontmatter.redirect) {
      var head = ['meta', {'http-equiv': "refresh", content: `0; url=${ pageData.frontmatter.redirect }`}]
      if (!pageData.frontmatter.head) {pageData.frontmatter.head = [head]}
      pageData.frontmatter.head.push(head);
    }
  },
  cleanUrls: true, // remove .html
  markdown: {
    languages: [
      mcfunctionGrammar,
      snbtGrammar,
      langGrammar,
      molangGrammar,
      mcscriptGrammar,
    ],
  },
  sitemap: {
    hostname: "https://docs.lpsmods.dev/",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // externalLinkIcon: true, disable in InvSlot.vue
    logo: "/images/logo.png",
    footer: {
      message: "Not associated with or approved by Mojang Studios or Microsoft",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Documentation",
        items: [
          { text: "Python", link: "/python-docs" },
          { text: "Minecraft", link: "/minecraft-docs" },
          { text: "Misc", link: "/misc-docs" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/:path",
    },
    sidebar: {
      // Python
      "/accentcolordetect/": [
        {
          text: "accentcolordetect",
          base: "/accentcolordetect/",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
          ],
        },
      ],
      "/datapackutils/": [
        {
          text: "datapackutils",
          base: "/datapackutils/",
          items: [{ text: "Index", link: "/" }],
        },
      ],
      "/geysermc/": [
        {
          text: "GeyserMC",
          base: "/geysermc/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Functions",
              link: "/functions",
            },
            {
              text: "Classes",
              items: [
                { text: "BuildChange", link: "/BuildChange" },
                { text: "BuildList", link: "/BuildList" },
                { text: "Build", link: "/Build" },
                { text: "ConvertedSkin", link: "/ConvertedSkin" },
                { text: "Download", link: "/Download" },
                { text: "Link", link: "/Link" },
                { text: "OpenAPI", link: "/OpenAPI" },
                { text: "Path", link: "/Path" },
                { text: "ProjectVersion", link: "/ProjectVersion" },
                { text: "Project", link: "/Project" },
                {
                  text: "RecentConvertedSkinList",
                  link: "/RecentConvertedSkinList",
                },
                { text: "Schema", link: "/Schema" },
                { text: "Server", link: "/Server" },
                { text: "Statistics", link: "/Statistics" },
                { text: "UsernameProfile", link: "/UsernameProfile" },
              ],
            },
          ],
        },
      ],
      "/jsonpack/": [
        {
          text: "jsonpack",
          base: "/jsonpack/",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
            { text: "Classes", items: [] },
            { text: "Examples", items: [] },
          ],
        },
      ],
      "/mcaddon/": [
        {
          text: "mcaddon",
          base: "/mcaddon/",
          docFooterText: "desc",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
            { text: "Constants", link: "/constants" },
            {
              text: "Classes",
              items: [
                { text: "Item", link: "/Item" },
                { text: "ItemComponent", link: "/ItemComponent" },
                { text: "Block", link: "/Block" },
                { text: "BlockComponent", link: "/BlockComponent" },
                { text: "GeometryPart", link: "/GeometryPart" },
                { text: "CullingRule", link: "/CullingRule" },
                { text: "BlockCullingRules", link: "/BlockCullingRules" },
                { text: "CameraPreset", link: "/CameraPreset" },
                { text: "Event", link: "/Event" },
              ],
            },
            {
              text: "Examples",
              items: [
                { text: "Item", link: "/example-items" },
                { text: "Block", link: "/example-blocks" },
              ],
            },
          ],
        },
      ],
      "/mcextract/": [
        {
          text: "mcextract",
          base: "/mcextract/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Classes",
              items: [{ text: "MCExtractAPI", link: "/MCExtractAPI" }],
            },
          ],
        },
      ],
      "/mojangskin/": [
        {
          text: "mojangskin",
          base: "/mojangskin/",
          items: [
            { text: "Index", link: "/" },
            { text: "Constants", link: "/constants" },
            {
              text: "Classes",
              items: [
                { text: "MojangSkin", link: "/MojangSkin" },
                { text: "SkinAnimation", link: "/SkinAnimation" },
                { text: "SkinCanvas", link: "/SkinCanvas" },
                { text: "Skin", link: "/Skin" },
              ],
            },
          ],
        },
      ],
      "/molang/": [
        {
          text: "molang",
          base: "/molang/",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
            { text: "Classes", items: [{ text: "Molang", link: "/Molang" }] },
          ],
        },
      ],
      "/multicraft/": [
        {
          text: "multicraft",
          base: "/multicraft/",
          items: [
            { text: "Index", link: "/" },
            { text: "Constants", link: "/constants" },
            { text: "Functions", link: "/functions" },
            {
              text: "Classes",
              items: [
                { text: "MulticraftAPI", link: "/MulticraftAPI" },
                { text: "Backup", link: "/Backup" },
                { text: "ChatMessage", link: "/ChatMessage" },
                { text: "Command", link: "/Command" },
                { text: "Database", link: "/DataBase" },
                { text: "Hosts", link: "/hosts" },
                { text: "Player", link: "/Player" },
                { text: "Schedule", link: "/Schedule" },
                {
                  text: "ServerResources",
                  link: "/ServerResources",
                },
                { text: "ServerStatus", link: "/ServerStatus" },
                { text: "Server", link: "/Server" },
                { text: "User", link: "/User" },
              ],
            },
          ],
        },
      ],
      "/serverjars-api/": [
        {
          text: "serverjars",
          base: "/serverjars-api/",
          items: [
            { text: "Index", link: "/" },
            { text: "Constants", link: "/constants" },
            { text: "Functions", link: "/functions" },
            {
              text: "Classes",
              items: [
                { text: "Jar", link: "/Jar" },
                { text: "Size", link: "/Size" },
              ],
            },
          ],
        },
      ],
      "/tkinterplus/": [
        {
          text: "TkinterPlus",
          base: "/tkinterplus/",
          items: [
            { text: "Index", link: "/" },
            { text: "Constants", link: "/constants" },
            { text: "Functions", link: "/functions" },
            { text: "util", link: "/util" },
            {
              text: "Classes",
              collapsed: true,
              items: [
                { text: "Animation", link: "/Animation" },
                { text: "FX", link: "/FX" },
                { text: "Sprite", link: "/Sprite" },
                { text: "SpriteSheet", link: "/SpriteSheet" },
                { text: "Test", link: "/test" },
                { text: "Tween", link: "/Tween" },
              ],
            },
            {
              text: "Widgets",
              collapsed: true,
              base: "/tkinterplus/widgets/",
              items: [
                { text: "Accordion", link: "/Accordion" },
                {
                  text: 'Audio <Badge type="warning" text="Experimental" />',
                  link: "/Audio",
                },
                {
                  text: "BaseWidgetPlus",
                  link: "/BaseWidgetPlus",
                },
                { text: "BindButton", link: "/BindButton" },
                {
                  text: "CanvasPlus",
                  link: "/CanvasPlus",
                },
                { text: "Canvas3d", link: "/Canvas3d" },
                { text: "CodeBlock", link: "/CodeBlock" },
                {
                  text: "ContextMenu",
                  link: "/ContextMenu",
                },
                { text: "Footer", link: "/Footer" },
                { text: "Form", link: "/Form" },
                {
                  text: "FormattedText",
                  link: "/FormattedText",
                },
                { text: "Input", link: "/Input" },
                {
                  text: "Notification",
                  link: "/Notification",
                },
                {
                  text: "OwlCarousel",
                  link: "/OwlCarousel",
                },
                { text: "Paragraph", link: "/Paragraph" },
                { text: "Picture", link: "/Picture" },
                {
                  text: "ScrolledFrame",
                  link: "/ScrolledFrame",
                },
                { text: "Slideshow", link: "/Slideshow" },
                { text: "TabView", link: "/TabView" },
                { text: "Tooltip", link: "/Tooltip" },
                { text: "Webframe", link: "/WebFrame" },
              ],
            },
            {
              text: "Windows",
              base: "/tkinterplus/windows/",
              collapsed: true,
              items: [
                { text: "Format", link: "/Format" },
                { text: "AskEnum", link: "/AskEnum" },
                { text: "Config", link: "/Config" },
                {
                  text: "DeveloperTools",
                  link: "/DeveloperTools",
                },
                { text: "Dialog", link: "/Dialog" },
                { text: "Message", link: "/Message" },
                { text: "Modal", link: "/Modal" },
                { text: "Geometry", link: "/Geometry" },
                { text: "modalbox", link: "/modalbox" },
                {
                  text: "ModalDialog",
                  link: "/ModalDialog",
                },
                {
                  text: "ShowProgress",
                  link: "/ShowProgress",
                },
                {
                  text: "SimpleModal",
                  link: "/SimpleModal",
                },
                { text: "TextEditor", link: "/TextEditor" },
              ],
            },
            {
              text: "Examples",
              base: "/tkinterplus/examples/",
              collapsed: true,
              items: [
                { text: "Accordian", link: "/accordian" },
                { text: "Buttons", link: "/buttons" },
                { text: "Code", link: "/code" },
                { text: "Console", link: "/console" },
                { text: "Developer Tools", link: "/developer_tools" },
                { text: "Footer", link: "/footer" },
                { text: "Form", link: "/form" },
                { text: "Modal", link: "/modal" },
                { text: "PictureBox", link: "/picturebox" },
                { text: "ScrolledFrame", link: "/scrolledframe" },
                { text: "SimpleDialog", link: "/simpledialog" },
              ],
            },
          ],
        },
      ],
      "/userfolder/": [
        {
          text: "UserFolder",
          base: "/userfolder/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Classes",
              collapsed: false,
              items: [
                { text: "Cache", link: "/Cache" },
                { text: "Config", link: "/Config" },
                { text: "User", link: "/User" },
                { text: "ConfigDialog", link: "/ConfigDialog" },
                { text: "CTkConfigDialog", link: "/CTkConfigDialog" },
                { text: "localStorage", link: "/localStorage" },
                { text: "sessionStorage", link: "/sessionStorage" },
                { text: "Storage", link: "/Storage" },
                { text: "TrackEvent", link: "/TrackEvent" },
              ],
            },
            { text: "Functions", link: "/functions" },
          ],
        },
      ],
      // Minecraft
      "/assetsplus/": [
        {
          text: "assetsplus",
          base: "/assetsplus/",
          items: [
            { text: "Index", link: "/" },
            { text: "Models", link: "/models" },
            { text: "Block Textures", link: "/block-textures" },
            { text: "Item Textures", link: "/item-textures" },
          ],
        },
      ],
      "/morefood/": [
        {
          text: "morefood",
          base: "/morefood/",
          items: [{ text: "Index", link: "/" }],
        },
      ],
      "/morenbt/": [
        {
          text: "morenbt",
          base: "/morenbt/",
          items: [
            { text: "Index", link: "/" },
            { text: "Config", link: "/config" },
            {
              text: "Block",
              collapsed: false,
              items: [{ text: "Tags", link: "/block/tags" }],
            },
            {
              text: "Entity",
              collapsed: false,
              items: [{ text: "Tags", link: "/entity/tags" }],
            },
            {
              text: "Item",
              collapsed: true,
              items: [
                { text: "Animation", link: "/item/animation" },
                { text: "BlockTag", link: "/item/block-tag" },
                { text: "CustomBlock", link: "/item/custom-block" },
                { text: "DamageTool", link: "/item/damage-tool" },
                { text: "DebugLog", link: "/item/debugLog" },
                { text: "Durability", link: "/item/durability" },
                { text: "Food", link: "/item/food" },
                { text: "Inventory", link: "/item/inventory" },
                { text: "MoreNBT", link: "/item/moreNbt" },
                { text: "New UI", link: "/item/new-ui" },
                { text: "Shooter", link: "/item/shooter" },
                { text: "Simple", link: "/item/simple" },
                { text: "Throwable", link: "/item/throwable" },
                {
                  text: "Trigger Events",
                  link: "/item/trigger-events",
                },
                {
                  text: "Event Conditions",
                  link: "/item/event-conditions",
                },
                { text: "Events", link: "/item/events" },
              ],
            },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Cave Light", link: "/morenbt/example-cave-light" },
                {
                  text: "Carrot Thrower",
                  link: "/morenbt/example-carrot-thrower",
                },
                { text: "Foods", link: "/morenbt/example-foods" },
                { text: "New UI", link: "/morenbt/example-new-ui" },
                {
                  text: "Pocket Ender Chest",
                  link: "/morenbt/example-pocket-ender-chest",
                },
                {
                  text: "Sea Treasure Loot",
                  link: "/morenbt/example-sea-treasure-loot",
                },
              ],
            },
          ],
        },
      ],
      "/recordapi/": [
        {
          text: "recordapi",
          base: "/recordapi/",
          items: [
            { text: "Index", link: "/" },
            { text: "Creeper Loot", link: "/creeper-loot" },
            { text: "Custom Model Data", link: "/custom-model-data" },
            { text: "Item NBT", link: "/item-nbt" },
          ],
        },
      ],
      "/lightning-bolt-glass/": [
        {
          text: "Lightning Bolt Glass",
          base: "/lightning-bolt-glass/",
          items: [
            { text: "Index", link: "/" },
            { text: "Fulgurite", link: "/fulgurite" },
            { text: "Legacy Format", link: "/legacy-format" },
            { text: "Examples", link: "/example-fulgurites" },
          ],
        },
      ],
      "/rcore-api/": [
        {
          text: "LPS Rcore API",
          base: "/rcore-api/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Upcoming Features",
              collapsed: true,
              items: [
                { text: "Crafting Table", link: "/crafting-table" },
                { text: "Items", link: "/items" },
                { text: "Item Types", link: "/item-types" },
                { text: "Recipes", link: "/recipes" },
                { text: "Recipe Types", link: "/recipe-types" },
                { text: "Tables", link: "/tables" },
                { text: "Events", link: "/events" },
                { text: "utils", link: "/utils" },
                {
                  text: "Examples",
                  collapsed: true,
                  items: [
                    { text: "Items", link: "/example-items" },
                    { text: "Item Types", link: "/example-item-types" },
                    { text: "Recipes", link: "/example-recipes" },
                    { text: "Recipe Types", link: "/example-recipe-types" },
                    { text: "Tables", link: "/example-tables" },
                  ],
                },
              ],
            },
            // { text: "Generator", link: "/generator" },
          ],
        },
      ],
      "/poses/": [
        {
          text: "Armor Stand Poses",
          base: "/poses/",
          items: [
            { text: "Index", link: "/" },
            { text: "Fabric", link: "/fabric" },
            { text: "Datapack", link: "/datapack" },
            // { text: "Generator", link: "/generator" },
          ],
        },
      ],
      "/spawner-craft/": [
        {
          text: "Spawner Craft",
          base: "/spawner-craft/",
          items: [
            { text: "Index", link: "/" },
            { text: "Hostile", link: "/hostile" },
            { text: "Friendly", link: "/friendly" },
            { text: "Underwater", link: "/underwater" },
            { text: "Nether", link: "/nether" },
            { text: "Misc", link: "/misc" },
            { text: "Upcoming", link: "/upcoming" },
          ],
        },
      ],
      "/magnet/": [
        {
          text: "Simple Magnets",
          base: "/magnet/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
            { text: "Items", link: "/items" },
          ],
        },
      ],
      "/breaker/": [
        {
          text: "Ultimate Block Breaker",
          base: "/breaker/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
            { text: "Items", link: "/items" },
          ],
        },
      ],
      "/more-block/": [
        {
          text: "More Blocks",
          base: "/more-block/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
          ],
        },
      ],
      "/more-pumpkin/": [
        {
          text: "More Pumpkins",
          base: "/more-pumpkin/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
          ],
        },
      ],
      "/more-honey/": [
        {
          text: "More Honey",
          base: "/more-honey/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
            { text: "Items", link: "/items" },
          ],
        },
      ],
      "/more-gold/": [
        {
          text: "More Gold",
          base: "/more-gold/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
            { text: "Items", link: "/items" },
          ],
        },
      ],
      "/bandage/": [
        {
          text: "Bandage",
          base: "/bandage/",
          items: [
            { text: "Index", link: "/" },
            { text: "Items", link: "/items" },
            { text: "Item Format", link: "/item-format" },
          ],
        },
      ],
      // Misc
      "/recipe-display/": [
        {
          text: "Recipe Display",
          base: "/recipe-display/",
          items: [
            { text: "Index", link: "/" },
            { text: "Syntax", link: "/syntax" },
          ],
        },
      ],
      "/update-checker/": [
        {
          text: "Update Checker",
          base: "/update-checker/",
          items: [
            { text: "Index", link: "/" },
            { text: "Schema", link: "/schema" },
            { text: "Syntax", link: "/syntax" },
            { text: "Background Options", link: "/background-options" },
            { text: "Markdown Flavor", link: "/markdown-flavor" },
            {
              text: "Examples",
              items: [
                { text: "Example", link: "/example" },
                { text: "Premium Example", link: "/premium-example" },
              ],
            },
          ],
        },
      ],
      "/lpsmods/": [
        {
          text: "lpsmods Docs",
          base: "/lpsmods/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "docs.lpsmods.dev",
              base: "/lpsmods/docs/",
              collapsed: false,
              items: [
                { text: "Frontmatter Config", link: "/frontmatter-config" },
                { text: "Markdown Extensions", link: "/markdown" },
                {
                  text: "Components",
                  base: "/lpsmods/docs/components/",
                  items: [
                    { text: "ShapedRecipe", link: "/ShapedRecipe" },
                    { text: "ShapelessRecipe", link: "/ShapelessRecipe" },
                    { text: "SmeltingRecipe", link: "/SmeltingRecipe" },
                    { text: "BrewingRecipe", link: "/BrewingRecipe" },
                    { text: "StonecutterRecipe", link: "/StonecutterRecipe" },
                    { text: "SmithingRecipe", link: "/SmithingRecipe" },
                    { text: "Inventory", link: "/Inventory" },
                    { text: "InvSlot", link: "/InvSlot" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "/": [
        {
          text: "Documentation",
          items: [
            { text: "Python", link: "/python-docs" },
            { text: "Minecraft", link: "/minecraft-docs" },
            { text: "Misc", link: "/misc-docs" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/legopitstop/docs.lpsmods.dev",
      },
    ],
  },
});
