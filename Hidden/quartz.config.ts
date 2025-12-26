import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
  * Quartz 4 Configuration
* Gothic / Curse of Strahd themed
*/
const config: QuartzConfig = {
  configuration: {
    pageTitle: "DenDurance — Curse of Strahd",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cos.ploxbox.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",        // gothic, cathedral vibes
        body: "Crimson Text",    // readable, book-like
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4f1ee",        // parchment
          lightgray: "#e0d8d2",
          gray: "#b8a9a1",
          darkgray: "#4a3f3a",
          dark: "#2a1f1b",
          secondary: "#6b1f1f",    // dried blood
          tertiary: "#8b5e3c",     // leather / wood
          highlight: "rgba(107, 31, 31, 0.12)",
          textHighlight: "#8b000055",
        },
        darkMode: {
          light: "#1a1412",        // near-black brown
          lightgray: "#2b211e",
          gray: "#5a4a44",
          darkgray: "#d6cfc9",
          dark: "#f2ede8",
          secondary: "#9b2c2c",    // crimson
          tertiary: "#c19a6b",     // candlelight
          highlight: "rgba(155, 44, 44, 0.18)",
          textHighlight: "#b2222266",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "rose-pine-dawn",
          dark: "rose-pine-moon",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

