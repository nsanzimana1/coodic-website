import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Start Your online Presence with coodic ',
  tagline: 'Coodic is a powerful solution designed to help startups build innovative, scalable applications.',
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
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          label: 'About Us',
          position: 'right',
        },
      
        {
          to: '/projects', // Highlight past work
          label: 'Projects',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Careers',
        },
        {
          to: '/blog',
          label: 'Blog',
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
              to: '/project',
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
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
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
              label: 'Discord',
              href: 'https://discord.gg/coodic',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/coodic',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A101964191&keywords=coodic&origin=RICH_QUERY_SUGGESTION&position=0&sid=pZg',
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
