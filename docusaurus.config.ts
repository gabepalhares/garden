import {themes} from 'prism-react-renderer';
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
export default {
  title: 'g.arden',
  tagline: `where I keep everything I study and learn`,
  url: 'https://gabrielpalhares.dev/',
  baseUrl: '/garden/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'minortypo', // Usually your GitHub org/user name.
  projectName: 'garden', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexBlog: false,
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'Zettelkasten',
      logo: {
        alt: 'Zettelkasten',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'tags',
          position: 'left',
          label: 'Tags',
        },
        {
          label: 'Dev.to',
          href: 'https://dev.to/gabepalhares',
          position: 'right',
        },
        {
          label: 'Github',
          href: 'https://github.com/gabepalhares/garden',
          position: 'right',
        },
        {
          label: 'Bluesky',
          href: 'https://bsky.app/profile/minortypo.social',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Gabriel Palhares`,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          path: './docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          editCurrentVersion: false,
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3SK393X2BR',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
