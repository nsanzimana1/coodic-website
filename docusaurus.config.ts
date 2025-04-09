import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Start Your online Presence with coodic ',
  tagline: 'From startups to enterprise if you can imagine it, we can build it',
  favicon: 'img/coodic.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coodic', // Usually your GitHub org/user name.
  projectName: 'coodic website', // Usually your repo name.

  onBrokenLinks: 'warn',
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
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: './blog', // Point to the nested blog directory
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'COODIC',
      logo: {
        alt: 'COODIC Logo',
        src: 'img/coodic.png',
      },
      items: [
        {
          to: '/about', // Create an About page if you don't have one
          label: 'About',
          position: 'right',
        },
      
        {
          to: '/projects', // Highlight past work
          label: 'Projects',
          position: 'right',
        },
        {
          to:'/careers',
          label: 'Careers',
          position: 'right',
        },
        {
          to: '/appstore',
          label: 'AppStore',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/coodic',
          label: 'GitHub',
          position: 'right',
        },
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Web Platforms',
              to: '/projects',
            },
            
          ],
        },
        {
          title: 'links',
          items: [
            {
              label: 'About ',
              to: '/about',
            },
            
            {
              label: 'Projects',
              to: '/projects',
            },
      
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'AppStore',
              to: '/appstore',
            },
            {
              label: 'Careers',
              to: '/careers',
            },
          
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/coodic',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/coodic',
            },
            {
              label: 'Sclack',
              href: 'https://join.slack.com/t/coodic/shared_invite/zt-33ew026hv-tAUobFrtTwh3DAZ2Cu25Gg',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/coodic/?viewAsMember=true',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Coodic. All rights reserved.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
