import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌾 Kuchai's Brain Tree",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "kuchaicode.github.io/braintree",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Sawarabi Mincho",
        body: "Klee One",
        code: "Share Tech Mono",
      },
      colors: {
        lightMode: {
          light: "#e7f0f2",
          lightgray: "#d9e5e3",
          gray: "#5a7a82",
          darkgray: "#606060",
          dark: "#425955",
          secondary: "#368079",
          tertiary: "#7dc0b9",
          highlight: "rgba(91, 163, 156, 0.15)",
          textHighlight: "rgba(91, 163, 156, 0.35)"
        },
        darkMode: {
          light: "#162629",
          lightgray: "#3f4f4d",
          gray: "#7793a8;",
          darkgray: "#c3d6d9",
          dark: "#d1e1df",
          secondary: "#94e4d1",
          tertiary: "#7dc0b9",
          highlight: "rgba(91, 163, 156, 0.15)",
          textHighlight: "rgba(91, 163, 156, 0.35)"
        }
        ,
        // light: page background
        // lightgray: borders
        // gray: graph links, heavier borders
        // darkgray: body text
        // dark: header text and icons
        // secondary: link colour, current graph node
        // tertiary: hover states and visited graph nodes
        // highlight: internal link background, highlighted text, highlighted lines of code
        // textHighlight: markdown highlighted text background
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
