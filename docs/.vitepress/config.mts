import { HeadConfig, defineConfig } from "vitepress";

import gradleGrammar from "./theme/syntaxes/gradle.tmLanguage.json";
import mcfunctionGrammar from "./theme/syntaxes/mcfunction.tmLanguage.json";
import snbtGrammar from "./theme/syntaxes/snbt.tmLanguage.json";
import langGrammar from "./theme/syntaxes/lang.tmLanguage.json";
import molangGrammar from "./theme/syntaxes/molang.tmLanguage.json";
import mcscriptGrammar from "./theme/syntaxes/mcscript.tmLanguage.json";

function getIcon(path, icons) {
  const s = "/" + path.replace("\\", "/");
  for (const [key, value] of Object.entries(icons)) {
    if (s.includes(key)) {
      return value;
    }
  }
  return undefined;
}

// register
// "SoftwareFileSize",
// "SoftwareFile",
// "SoftwareBuilder",
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Legopitstop Docs",
  description: "Documentation for all my projects",
  head: [
    // ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    // Google AdSense
    [
      "script",
      {
        "data-ad-client": "pub-9949841791324306",
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],

    // Manifest
    ["link", { rel: "manifest", href: "/site.webmanifest" }],

    // Global SEO
    ["meta", { name: "theme-color", content: "#ff8800" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://docs.lpsmods.dev/" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:image", content: "/images/logo.png" }],

    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://docs.lpsmods.dev/" }],
    ["meta", { property: "twitter:image", content: "/images/logo.png" }],
  ],
  transformPageData(pageData) {
    pageData.titleTemplate = ":title";

    if (pageData.frontmatter.redirect) {
      const url = pageData.frontmatter.redirect.replace(".md", "");
      pageData.title = "Redirecting…";
      const head = [
        "meta",
        {
          "http-equiv": "refresh",
          content: `0; url=${url}`,
        },
      ];
      if (!pageData.frontmatter.head) {
        pageData.frontmatter.head = [head];
      } else {
        pageData.frontmatter.head.push(head);
      }
    }
  },
  transformHead: ({ pageData, siteConfig, page }) => {
    const head: HeadConfig[] = [];
    // Per-page favicon
    var icon = getIcon(page, siteConfig.userConfig.icon);
    var favicon = icon ? icon.favicon : "/favicon.ico";

    // Per-page SEO
    // Primary
    head.push([
      "meta",
      { property: "title", content: pageData.frontmatter?.title ?? "Untitled" },
    ]);
    head.push([
      "meta",
      { name: "keywords", content: pageData.frontmatter?.keywords ?? "" },
    ]);
    // icons
    head.push([
      "link",
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "256x256",
        href: favicon,
      },
    ]);
    head.push([
      "link",
      { rel: "icon", type: "image/x-icon", sizes: "256x256", href: favicon },
    ]);
    head.push([
      "link",
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        sizes: "256x256",
        href: favicon,
      },
    ]);
    // Open Graph / Facebook
    head.push([
      "meta",
      {
        property: "og:title",
        content: pageData.frontmatter?.title ?? "Untitled",
      },
    ]);
    head.push([
      "meta",
      {
        property: "og:description",
        content: pageData.frontmatter?.description ?? "",
      },
    ]);
    // Twitter
    head.push([
      "meta",
      {
        property: "twitter:title",
        content: pageData.frontmatter?.title ?? "Untitled",
      },
    ]);
    head.push([
      "meta",
      {
        property: "twitter:description",
        content: pageData.frontmatter?.description ?? "",
      },
    ]);
    // Meta tags
    return head;
  },
  cleanUrls: true, // remove .html
  markdown: {
    breaks: true,
    checkLinks: true,
    languages: [
      mcfunctionGrammar,
      snbtGrammar,
      langGrammar,
      molangGrammar,
      mcscriptGrammar,
      gradleGrammar,
    ],
  },
  sitemap: {
    hostname: "https://docs.lpsmods.dev/",
  },

  // NOTE: This is a custom property used in transformHead
  icon: {
    "/assets-plus/": { favicon: "/images/assets-plus/favicon.ico" },
    "/bandages/": { favicon: "/images/bandages/favicon.ico" },
    "/barked/": { favicon: "/images/barked/favicon.ico" },
    "/basalt-blocks/": { favicon: "/images/basalt-blocks/favicon.ico" },
    "/ultimate-block-breaker/": {
      favicon: "/images/ultimate-block-breaker/favicon.ico",
    },
    "/bright/": { favicon: "/images/bright/favicon.ico" },
    "/canned/": { favicon: "/images/canned/favicon.ico" },
    "/lightning-bolt-glass/": {
      favicon: "/images/lightning-bolt-glass/favicon.ico",
    },
    "/simple-magnets/": { favicon: "/images/simple-magnets/favicon.ico" },
    "/more-blocks/": { favicon: "/images/more-blocks/favicon.ico" },
    "/more-food/": { favicon: "/images/more-food/favicon.ico" },
    "/more-gold/": { favicon: "/images/more-gold/favicon.ico" },
    "/more-honey/": { favicon: "/images/more-honey/favicon.ico" },
    "/more-pumpkins/": { favicon: "/images/more-pumpkins/favicon.ico" },
    "/more-stairs-and-slabs/": {
      favicon: "/images/more-stairs-and-slabs/favicon.ico",
    },
    "/armor-stand-poses/": { favicon: "/images/armor-stand-poses/favicon.ico" },
    "/lps-recipe-core/": { favicon: "/images/lps-recipe-core/favicon.ico" },
    "/record-api/": { favicon: "/images/record-api/favicon.ico" },
    "/spawner-craft/": { favicon: "/images/spawner-craft/favicon.ico" },
    "/tweaks_n_stuff/": { favicon: "/images/tweaks_n_stuff/favicon.ico" },
    "/ai_bench/": { favicon: "/images/ai_bench/favicon.ico" },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // externalLinkIcon: true, disabled because of InvSlot.vue
    lastUpdated: {},
    logo: { src: "/images/logo.png", alt: "Logo" },
    footer: {
      copyright: "2024 © Legopitstop",
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
          { text: "Blockbench Plugins", link: "/blockbench-plugins" },
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
            text: "How to Find com.mojang Folder",
            link: "/tutorials/how-to-find-com.mojang-folder",
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
          {
            text: "How to Enable Content Log GUI",
            link: "/tutorials/how-to-enable-log-gui",
          },
          {
            text: "What In The Pack Format?",
            link: "/tutorials/what-in-the-pack-format",
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
      "/accentcolordetect": [
        {
          text: "accentcolordetect",
          base: "/accentcolordetect/",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
          ],
        },
      ],
      "/mcpath": [
        {
          text: "mcpath",
          base: "/mcpath/",
          items: [
            { text: "Index", link: "/" },
            { text: "Globals", link: "/globals" },
            {
              text: "Classes",
              items: [
                { text: "Bedrock", link: "/Bedrock" },
                { text: "Java", link: "/Java" },
                { text: "Preview", link: "/Preview" },
                { text: "Education", link: "/Education" },
              ],
            },
            {
              text: "Legacy (1.1.0)",
              base: "/mcpath/legacy",
              items: [
                { text: "globals", link: "/globals" },
                { text: "MCPath", link: "/MCPath" },
              ],
            },
          ],
        },
      ],
      "/datapackutils": [
        {
          text: "datapackutils",
          base: "/datapackutils/",
          items: [{ text: "Index", link: "/" }],
        },
      ],
      "/geysermc": [
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
      "/jsonpack": [
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
      "/mclang": [
        {
          text: "mclang",
          base: "/mclang/",
          items: [
            { text: "Index", link: "/" },
            { text: "globals", link: "/globals" },
            { text: "Exceptions", link: "/Exceptions" },
            {
              text: "Classes",
              items: [
                { text: "Lang", link: "/Lang" },
                { text: "LANGEncoder", link: "/LANGEncoder" },
                { text: "LANGDecoder", link: "/LANGDecoder" },
              ],
            },
          ],
        },
      ],
      "/mcaddon": [
        {
          text: "mcaddon",
          base: "/mcaddon/",
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
      "/mcextract": [
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
      "/mojangskin": [
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
      "/molang": [
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
      "/multicraft": [
        {
          text: "multicraft",
          base: "/multicraft/",
          items: [
            { text: "Index", link: "/" },
            { text: "Known Hosts", link: "/Known_Hosts" },
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
      "/serverjars": [
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
      "/tkinterplus": [
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
                { text: "AskEnum", link: "/askenum" },
                { text: "Config", link: "/Config" },
                {
                  text: "DeveloperTools",
                  link: "/DeveloperTools",
                },
                { text: "Dialog", link: "/Dialog" },
                { text: "Message", link: "/Message" },
                { text: "Modal", link: "/Modal" },
                { text: "Geometry", link: "/Geometry" },
                { text: "modalbox", link: "/ModalBox" },
                {
                  text: "ModalDialog",
                  link: "/ModalDialog",
                },
                {
                  text: "ShowProgress",
                  link: "/showprogress",
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
      "/userfolder": [
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
      "/gitfiles": [
        {
          text: "gitfiles",
          base: "/gitfiles/",
          items: [
            { text: "Index", link: "/" },
            { text: "Functions", link: "/functions" },
            {
              text: "Classes",
              items: [{ text: "IgnoreFilter", link: "/IgnoreFilter" }],
            },
          ],
        },
      ],
      // Minecraft
      "/assets-plus": [
        {
          text: "Assets+",
          base: "/assets-plus/",
          items: [
            { text: "Index", link: "/" },
            { text: "Models", link: "/models" },
            { text: "Block Textures", link: "/block-textures" },
            { text: "Item Textures", link: "/item-textures" },
          ],
        },
      ],
      "/basalt-blocks": [
        {
          text: "Basalt Blocks",
          base: "/basalt-blocks/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [
                { text: "Basalt", link: "./Basalt.md" },
                { text: "Smooth Basalt", link: "./Smooth_Basalt.md" },
                { text: "Polished Basalt", link: "./Polished_Basalt.md" },
                {
                  text: "Polished Basalt Bricks",
                  link: "./Polished_Basalt_Bricks.md",
                },
                { text: "Cobbled Basalt", link: "./Cobbled_Basalt.md" },
              ],
            },
          ],
        },
      ],
      "/record-api": [
        {
          text: "Record API",
          base: "/record-api/",
          items: [
            { text: "Index", link: "/" },
            { text: "Creeper Loot", link: "/creeper-loot" },
            { text: "Custom Model Data", link: "/custom-model-data" },
            { text: "Item NBT", link: "/item-nbt" },
            // { text: "Music Disc Studio", link: "/music-disc-studio" },
          ],
        },
      ],
      "/lightning-bolt-glass": [
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
      "/lps-recipe-core": [
        {
          text: "LPS Rcore API",
          base: "/lps-recipe-core/",
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
            { text: "Generator", link: "/generator" },
          ],
        },
      ],
      "/armor-stand-poses": [
        {
          text: "Armor Stand Poses",
          base: "/armor-stand-poses/",
          items: [
            { text: "Index", link: "/" },
            { text: "Data-Driven", link: "/data-driven" },
            { text: "Pose Format", link: "/pose-format" },
            { text: "Built-in Poses", link: "/builtin-poses" },
            { text: "Armor Stand Data", link: "/armor-stand-data" },
            { text: "Generator", link: "/generator" },
          ],
        },
      ],
      "/spawner-craft": [
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
      "/simple-magnets": [
        {
          text: "Simple Magnets",
          base: "/simple-magnets/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [
                { text: "Iron Magnet Block", link: "./Magnet_Block.md#iron" },
                { text: "Gold Magnet Block", link: "./Magnet_Block.md#gold" },
                {
                  text: "Copper Magnet Block",
                  link: "./Magnet_Block.md#copper",
                },
                {
                  text: "Diamond Magnet Block",
                  link: "./Magnet_Block.md#diamond",
                },
                {
                  text: "Netherite Magnet Block",
                  link: "./Magnet_Block.md#netherite",
                },
              ],
            },
            {
              text: "Items",
              collapsed: true,
              items: [
                { text: "Iron Magnet", link: "./Magnet.md#iron" },
                { text: "Gold Magnet", link: "./Magnet.md#gold" },
                { text: "Copper Magnet", link: "./Magnet.md#copper" },
                { text: "Diamond Magnet", link: "./Magnet.md#diamond" },
                { text: "Netherite Magnet", link: "./Magnet.md#netherite" },
              ],
            },
          ],
        },
      ],
      "/ultimate-block-breaker": [
        {
          text: "Ultimate Block Breaker",
          base: "/ultimate-block-breaker/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [
                {
                  text: "Wooden Breaker Block",
                  link: "./Block_Breaker.md#wooden",
                },
                {
                  text: "Stone Breaker Block",
                  link: "./Block_Breaker.md#stone",
                },
                { text: "Iron Breaker Block", link: "./Block_Breaker.md#iron" },
                { text: "Gold Breaker Block", link: "./Block_Breaker.md#gold" },
                {
                  text: "Diamond Breaker Block",
                  link: "./Block_Breaker.md#diamond",
                },
                {
                  text: "Netherite Breaker Block",
                  link: "./Block_Breaker.md#netherite",
                },
              ],
            },
            {
              text: "Items",
              collapsed: true,
              items: [
                {
                  text: "Stone Breaker Upgrade",
                  link: "./Breaker_Upgrade.md#stone",
                },
                {
                  text: "Iron Breaker Upgrade",
                  link: "./Breaker_Upgrade.md#iron",
                },
                {
                  text: "Gold Breaker Upgrade",
                  link: "./Breaker_Upgrade.md#gold",
                },
                {
                  text: "Diamond Breaker Upgrade",
                  link: "./Breaker_Upgrade.md#diamond",
                },
                {
                  text: "Netherite Breaker Upgrade",
                  link: "./Breaker_Upgrade.md#netherite",
                },
              ],
            },
          ],
        },
      ],
      "/barked": [
        {
          text: "Barked",
          base: "/barked/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Items",
              collapsed: true,
              items: [
                { text: "Bark", link: "./Bark.md" },
                { text: "Stipe", link: "./Stipe.md" },
                { text: "Sheath", link: "./Sheath.md" },
              ],
            },
          ],
        },
      ],
      "/bandages": [
        {
          text: "Bandages",
          base: "/bandages/",
          items: [
            { text: "Index", link: "/" },
            { text: "Item Format", link: "/item-format" },
            {
              text: "Items",
              collapsed: true,
              items: [{ text: "Bandage", link: "/Bandage.md" }],
            },
          ],
        },
      ],
      "/canned": [
        {
          text: "Canned",
          base: "/canned/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Items",
              collapsed: true,
              items: [{ text: "Can Opener", link: "/Can_Opener.md" }],
            },
            {
              text: "Blocks",
              collapsed: true,
              items: [{ text: "Can", link: "/Can.md" }],
            },
          ],
        },
      ],
      "/bright": [
        {
          text: "Bright",
          base: "/bright/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [
                { text: "Candle Stick", link: "/Candle_Stick.md" },
                { text: "Ceiling Light", link: "/Ceiling_Light.md" },
                { text: "Floor Light", link: "/Floor_Light.md" },
                { text: "Light Bulb", link: "/Light_Bulb.md" },
                { text: "Light Fixture", link: "/Light_Fixture.md" },
              ],
            },
          ],
        },
      ],
      "/more-blocks": [
        {
          text: "More Blocks",
          base: "/more-blocks/",
          items: [
            { text: "Index", link: "/" },
            { text: "Blocks", items: [{ text: "Layer", link: "./Layer.md" }] },
          ],
        },
      ],
      "/more-pumpkins": [
        {
          text: "More Pumpkins",
          base: "/more-pumpkins/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [
                { text: "Carved Pumpkin", link: "./Carved_Pumpkin.md" },
                { text: "Jack o'Lantern", link: "./Jack_o_Lantern.md" },
                {
                  text: "Soul Jack o'Lantern",
                  link: "./Soul_Jack_o_Lantern.md",
                },
              ],
            },
          ],
        },
      ],
      "/more-nbt": [
        {
          text: "morenbt",
          base: "/more-nbt/",
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
                { text: "Inventory", link: "/item/Inventory" },
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
      "/more-honey": [
        {
          text: "More Honey",
          base: "/more-honey/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Blocks",
              collapsed: true,
              items: [{ text: "Honey Press", link: "./Honey_Press.md" }],
            },
            {
              text: "Items",
              collapsed: true,
              items: [
                { text: "Honey Cooked Beef", link: "./Honey_Cooked_Beef.md" },
                {
                  text: "Honey Cooked Chicken",
                  link: "./Honey_Cooked_Chicken.md",
                },
                {
                  text: "Honey Cooked Mutton",
                  link: "./Honey_Cooked_Mutton.md",
                },
                {
                  text: "Honey Cooked Porkchop",
                  link: "./Honey_Cooked_Porkchop.md",
                },
                { text: "Honey Cookie", link: "./Honey_Cookie.md" },
                { text: "Honey Lemon Tea", link: "./Honey_Lemon_Tea.md" },
                { text: "Honey Pancakes", link: "./Honey_Pancakes.md" },
                { text: "Honey Sandwich", link: "./Honey_Sandwich.md" },
                { text: "Honey Toastie", link: "./Honey_Toastie.md" },
                { text: "Honey Waffle", link: "./Honey_Waffle.md" },
              ],
            },
          ],
        },
      ],
      "/more-gold": [
        {
          text: "More Gold",
          base: "/more-gold/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Items",
              collapsed: true,
              items: [
                { text: "Golden Banana", link: "./Golden_Banana.md" },
                { text: "Golden Fruit Seeds", link: "./Golden_Fruit_Seeds.md" },
                { text: "Golden Grape", link: "./Golden_Grape.md" },
                { text: "Golden Lemon", link: "./Golden_Lemon.md" },
                { text: "Golden Orange", link: "./Golden_Orange.md" },
                { text: "Golden Strawberry", link: "./Golden_Strawberry.md" },
              ],
            },
          ],
        },
      ],
      "/more-food": [
        {
          text: "Lot's More Food",
          base: "/more-food/",
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
                {
                  text: "PottedFlowerComponent",
                  link: "/PottedFlowerComponent",
                },
                { text: "PottableComponent", link: "/PottableComponent" },
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
      // Blockbench Plugins
      "/tweaks_n_stuff": [
        {
          text: "Tweaks & Stuff",
          base: "/tweaks_n_stuff/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Tweaks",
              collapsed: false,
              items: [
                { text: "Header Color", link: "/header_color" },
                { text: "Wrap Tabs", link: "/wrap_tabs" },
                { text: "Close Actions", link: "/close_actions" },
              ],
            },
            {
              text: "Documentation",
              base: "/tweaks_n_stuff/docs/",
              collapsed: true,
              items: [
                { text: "Getting Started", link: "/getting-started" },
                { text: "Creating a Tweak", link: "/tweak" },
              ],
            },
            {
              text: "API Reference",
              base: "/tweaks_n_stuff/api/",
              collapsed: true,
              items: [
                { text: "Tweak", link: "/Tweak" },
                { text: "SelectTweak", link: "/SelectTweak" },
                { text: "EditTweak", link: "/EditTweak" },
                { text: "ToggleTweak", link: "/ToggleTweak" },
              ],
            },
          ],
        },
      ],
      "/ai_bench": [
        {
          text: "AI Bench",
          base: "/ai_bench/",
          items: [
            { text: "Index", link: "/" },
            {
              text: "Services",
              collapsed: false,
              items: [{ text: "Ollama", link: "/ollama" }],
            },
            {
              text: "Documentation",
              base: "/ai_bench/docs/",
              collapsed: true,
              items: [
                { text: "Getting Started", link: "/getting-started" },
                { text: "Creating a Service", link: "/service" },
              ],
            },
            {
              text: "API Reference",
              base: "/ai_bench/api/",
              collapsed: true,
              items: [{ text: "Service", link: "/Service" }],
            },
          ],
        },
      ],
      // Misc
      "/recipe-display": [
        {
          text: "Recipe Display",
          base: "/recipe-display/",
          items: [
            { text: "Index", link: "/" },
            { text: "Syntax", link: "/syntax" },
          ],
        },
      ],
      "/update-checker": [
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
      "/lpsmods": [
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
      "/calculators": [
        {
          text: "Calculators",
          base: "/calculators/",
          items: [
            { text: "Index", link: "/" },
            // { text: "ArmorStandGenerator", link: "/ArmorStandGenerator" },
            { text: "MCExtractCLI", link: "/MCExtractCLI" },
            // { text: "MultiloaderGradleGenerator", link: "/MultiloaderGradleGenerator" },
            // { text: "MusicDiscStudio", link: "/MusicDiscStudio" },
            // { text: "RcoreGenerator", link: "/RcoreGenerator" },
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
            { text: "Blockbench Plugins", link: "/blockbench-plugins" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/legopitstop",
      },
      {
        icon: "twitter",
        link: "https://x.com/legopitstop",
      },
      {
        icon: "instagram",
        link: "https://instagram.com/legopitstop",
      },
      {
        icon: "youtube",
        link: "https://www.youtube.com/c/@legopitstop",
      },
      {
        icon: "discord",
        link: "https://lnk.lpsmods.dev/discord",
      },
    ],
  },
});
