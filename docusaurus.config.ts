import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const LINKS = {
  FORUMS: 'https://treasureisland.guildtag.com',
  DISCORD: 'https://discordapp.com/invite/e4gvhAG',
  GITHUB: 'https://github.com/treasureislandmc',
  BLOG: '/blog',
  TOOLS: '/tools',
};

const config: Config = {
  title: 'TreasureIslandMC',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://treasureislandmc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TreasureIslandMC/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TreasureIslandMC', // Usually your GitHub org/user name.
  projectName: 'TreasureIslandMC', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/full-transparent.png',
    navbar: {
      logo: {
        alt: 'TreasureIslandMC',
        src: 'img/full-transparent.png',
      },
      items: [
        {to: LINKS.BLOG, label: 'Blog', position: 'left'},
        {to: LINKS.TOOLS, label: 'Tools (WIP)', position: 'left'},
        {href: LINKS.FORUMS, label: 'Forums', position: 'left'},
        {href: LINKS.GITHUB, label: 'Github', position: 'right'},
        {href: LINKS.DISCORD, label: 'Discord', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: LINKS.DISCORD,
            },
            {
              label: 'Forums',
              href: LINKS.FORUMS,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: LINKS.BLOG,
            },
          ],
        },
      ],
      copyright: `Copyright © 2013 - ${new Date().getFullYear()} TreasureIslandMC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
