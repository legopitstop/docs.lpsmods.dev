import { HeadConfig, defineConfig } from "vitepress";

import gradleGrammar from "./theme/syntaxes/gradle.tmLanguage.json";
import mcfunctionGrammar from "./theme/syntaxes/mcfunction.tmLanguage.json";
import snbtGrammar from "./theme/syntaxes/snbt.tmLanguage.json";
import langGrammar from "./theme/syntaxes/lang.tmLanguage.json";
import molangGrammar from "./theme/syntaxes/molang.tmLanguage.json";
import mcscriptGrammar from "./theme/syntaxes/mcscript.tmLanguage.json";

import icon from "./icon.json";
import { sidebar } from "./sidebar.js";
import { nav } from "./nav.js";

function getIcon(path: string, icons) {
  const s = "/" + path.replace("\\", "/");
  for (const [key, value] of Object.entries(icons)) {
    if (s.includes(key)) {
      return value;
    }
  }
  return undefined;
}

const year = new Date().getFullYear();

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

    // Material Icons
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        // href: "https://fonts.googleapis.com/icon?family=Material+Icons",
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
    head.push(["meta", { property: "title", content: pageData.frontmatter?.title ?? "Untitled" }]);
    head.push(["meta", { name: "keywords", content: pageData.frontmatter?.keywords ?? "" }]);
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
    head.push(["link", { rel: "icon", type: "image/x-icon", sizes: "256x256", href: favicon }]);
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
    languages: [mcfunctionGrammar, snbtGrammar, langGrammar, molangGrammar, mcscriptGrammar, gradleGrammar],
  },
  sitemap: {
    hostname: "https://docs.lpsmods.dev/",
  },

  // NOTE: This is a custom property used in transformHead
  icon: icon,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // externalLinkIcon: true, disabled because of InvSlot.vue
    lastUpdated: {},
    logo: { src: "/images/logo.png", alt: "Logo" },
    footer: {
      copyright: year + " © Legopitstop",
      message: "Not associated with or approved by Mojang Studios or Microsoft",
    },
    nav: nav,
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/:path",
    },
    sidebar: sidebar,
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
