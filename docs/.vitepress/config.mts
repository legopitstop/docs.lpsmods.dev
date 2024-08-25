import { HeadConfig, defineConfig } from "vitepress";
import mcfunctionGrammar from "./theme/syntaxes/mcfunction.tmLanguage.json";
import snbtGrammar from "./theme/syntaxes/snbt.tmLanguage.json";
import langGrammar from "./theme/syntaxes/lang.tmLanguage.json";
import molangGrammar from "./theme/syntaxes/molang.tmLanguage.json";
import mcscriptGrammar from "./theme/syntaxes/mcscript.tmLanguage.json";

// register
// "SoftwareFileSize",
// "SoftwareFile",
// "SoftwareBuilder",
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Legopitstop Docs",
  description: "Documentation for all my projects",
  head: [
    // Google Analytics
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-NDP4W9JV",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOURID');`,
    ],
    // Google AdSense
    [
      "script",
      {
        "data-ad-client": "pub-9949841791324306",
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],

    // SEO
    ["meta", { name: "theme-color", content: "#ff8800" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://docs.lpsmods.dev/" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:image", content: "/images/logo.png" }],

    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://docs.lpsmods.dev/" }],
    ["meta", { property: "twitter:image", content: "/images/logo.png" }],

    ["meta", { property: "fb:app_id", content: "458136053278758" }],
  ],
  transformPageData(pageData) {
    pageData.titleTemplate = ":title";
    if (pageData.frontmatter.redirect) {
      var head = [
        "meta",
        {
          "http-equiv": "refresh",
          content: `0; url=${pageData.frontmatter.redirect}`,
        },
      ];
      if (!pageData.frontmatter.head) {
        pageData.frontmatter.head = [head];
      }
      pageData.frontmatter.head.push(head);
    }
  },
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];
    if (!pageData.frontmatter.logo) {
      pageData.frontmatter.logo = "/favicon.ico";
    }
    // Primary
    head.push([
      "meta",
      { property: "title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      { name: "keywords", content: pageData.frontmatter.keywords },
    ]);
    head.push(["link", { rel: "icon", href: pageData.frontmatter.favicon }]);
    head.push([
      "link",
      { rel: "shortcut icon", href: pageData.frontmatter.favicon },
    ]);
    // Open Graph / Facebook
    head.push([
      "meta",
      { property: "og:title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      { property: "og:description", content: pageData.frontmatter.description },
    ]);
    // Twitter
    head.push([
      "meta",
      { property: "twitter:title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      {
        property: "twitter:description",
        content: pageData.frontmatter.description,
      },
    ]);
    // Meta tags
    return head;
  },
  cleanUrls: true, // remove .html
  markdown: {
    breaks: true,
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
    // externalLinkIcon: true, disabled because of InvSlot.vue
    lastUpdated: {},
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
      {
        text: "Tutorials",
        items: [
          {
            text: "How to Extract Minecraft Assets",
            link: "/tutorials/how-to-extract-minecraft-assets",
          },
          {
            text: "How to Find .minecraft Folder",
            link: "/tutorials/how-to-find-minecraft-folder",
          },
          {
            text: "How to Find Pack Validation",
            link: "/tutorials/how-to-find-pack-validation",
          },
          {
            text: "How to Install Add-Ons",
            link: "/tutorials/how-to-install-addons",
          },
          {
            text: "How to Install Data Packs",
            link: "/tutorials/how-to-install-data-packs",
          },
          {
            text: "How to Install Maps",
            link: "/tutorials/how-to-install-maps",
          },
          {
            text: "How to Install Resource Packs",
            link: "/tutorials/how-to-install-texture-packs",
          },
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
            { text: "CLI", link: "/cli" },
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
      "/serverjars/": [
        {
          text: "serverjars",
          base: "/serverjars/",
          items: [
            { text: "Index", link: "/" },
            { text: "Constants", link: "/constants" },
            { text: "Functions", link: "/functions" },
            {
              text: "Classes",
              items: [
                { text: "SoftwareBuilder", link: "/SoftwareBuilder" },
                { text: "SoftwareFile", link: "/SoftwareFile" },
                { text: "SoftwareFileSize", link: "/SoftwareFileSize" },
              ],
            },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "fetch_types", link: "/example-fetch_types" },
                { text: "fetch_all", link: "/example-fetch_all" },
                { text: "fetch_all_types", link: "/example-fetch_all_types" },
                { text: "fetch_details", link: "/example-fetch_details" },
                { text: "fetch_jar", link: "/example-fetch_jar" },
                { text: "fetch_latest", link: "/example-fetch_latest" },
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
          text: "Assets+",
          base: "/assetsplus/",
          items: [
            { text: "Index", link: "/" },
            { text: "Models", link: "/models" },
            { text: "Block Textures", link: "/block-textures" },
            { text: "Item Textures", link: "/item-textures" },
          ],
        },
      ],
      "/dataplus/": [
        {
          text: "Data+",
          base: "/dataplus/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Item",
              base: "/dataplus/item",
              items: [{ text: "LoreComponent", link: "/LoreComponent" }],
            },
            {
              text: "Block",
              base: "/dataplus/block",
              items: [
                { text: "ButtonComponent", link: "/ButtonComponent" },
                { text: "HeightComponent", link: "/HeightComponent" },
                { text: "LeverComponent", link: "/LeverComponent" },
                { text: "LogComponent", link: "/LogComponent" },
                { text: "SlabComponent", link: "/SlabComponent" },
                { text: "StairsComponent", link: "/StairsComponent" },
                { text: "Strippable", link: "/Strippable" },
                { text: "ToggleStateComponent", link: "/ToggleStateComponent" },
                { text: "TrapdoorComponent", link: "/TrapdoorComponent" },
                {
                  text: "VerticalSlabComponent",
                  link: "/VerticalSlabComponent",
                },
              ],
            },
          ],
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
                { text: "Cave Light", link: "/example-cave-light" },
                {
                  text: "Carrot Thrower",
                  link: "/example-carrot-thrower",
                },
                { text: "Foods", link: "/example-foods" },
                { text: "New UI", link: "/example-new-ui" },
                {
                  text: "Pocket Ender Chest",
                  link: "/example-pocket-ender-chest",
                },
                {
                  text: "Sea Treasure Loot",
                  link: "/example-sea-treasure-loot",
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
            // { text: "Music Disc Studio", link: "/music-disc-studio" },
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
      "/rcore/": [
        {
          text: "LPS Rcore API",
          base: "/rcore/",
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
            { text: "Data-Driven", link: "/data-driven" },
            { text: "Pose Format", link: "/pose-format" },
            { text: "Built-in Poses", link: "/builtin-poses" },
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
      "/moreblocks/": [
        {
          text: "More Blocks",
          base: "/moreblocks/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
          ],
        },
      ],
      "/morepumpkin/": [
        {
          text: "More Pumpkins",
          base: "/morepumpkin/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/blocks" },
          ],
        },
      ],
      "/morehoney/": [
        {
          text: "More Honey",
          base: "/morehoney/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", link: "/Blocks" },
            { text: "Items", link: "/Items" },
          ],
        },
      ],
      "/moregold/": [
        {
          text: "More Gold",
          base: "/moregold/",
          items: [
            { text: "Index", link: "/" },
            { text: "Items", link: "/Items" },
          ],
        },
      ],
      "/morefood/": [
        {
          text: "Lot's More Food",
          base: "/morefood/",
          items: [
            { text: "Index", link: "/" },
            // { text: "Blocks", link: "/Blocks" },
            // { text: "Items", link: "/Items" },
            // { text: "Foods", link: "/Foods" },
            // { text: "Drinks", link: "/Drinks" },
            {
              text: "Components",
              base: "/morefood/component/",
              collapsed: true,
              items: [
                { text: "MintyComponent", link: "/MintyComponent" },
                { text: "MREComponent", link: "/MREComponent" },
                { text: "PourableComponent", link: "/PourableComponent" },
                { text: "BushComponent", link: "/BushComponent" },
                { text: "CakeComponent", link: "/CakeComponent" },
                { text: "CandleCakeComponent", link: "/CandleCakeComponent" },
                { text: "CauldronComponent", link: "/CauldronComponent" },
                { text: "CropComponent", link: "/CropComponent" },
                { text: "HangingComponent", link: "/HangingComponent" },
                { text: "SaplingComponent", link: "/SaplingComponent" },
                { text: "SpileComponent", link: "/SpileComponent" },
                { text: "TallCropComponent", link: "/TallCropComponent" },
              ],
            },
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
            { text: "Tutorials", link: "/tutorials" },
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
