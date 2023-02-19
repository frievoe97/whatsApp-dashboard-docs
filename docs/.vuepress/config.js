import { defaultTheme } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "vuepress-plugin-comment2";

module.exports = {
    locales: {
        '/': {
          lang: 'de-DE',
          title: 'Find Mr. X',
      description: 'Vue-powered Static Site Generator'
        },
        '/en/': {
          lang: 'en-US',
          title: 'Find Mr. X',
      description: 'Vue-powered Static Site Generator'
        },
      },
      theme: hopeTheme({

        title: 'Test',
        darkmode: 'toggle',

        locales: {
          '/': {
            selectLanguageName: 'German',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/docs/',
                },
                {
                  text: 'Installation',
                  link: '/installation/',
                },
              ],
              sidebar: {
                '/docs/': [
                  {
                    text: 'Documentation',
                    collapsible: false,
                    children: ['description',
                    'usage',
                    'components',
                    'tests',
                    'future'],
                  },
                ],
                '/installation/': [
                  {
                    text: 'Installation',
                    collapsible: false,
                  },
                ],
              },
          },
          '/en/': {
            selectLanguageName: 'English',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/en/docs/',
                },
                {
                  text: 'Installation',
                  link: '/en/installation/',
                },

              ],
              sidebar: {
                '/en/docs/': [
                  {
                    text: 'Documentation',
                    collapsible: false,
                    children: ['description',
                    'usage',
                    'components',
                    'tests',
                    'future'],
                  },
                ],
                '/en/installation/': [
                  {
                    text: 'Installation',
                    collapsible: false,
                  },
                ],
              },
          },
        },
      }),
      plugins: [
        commentPlugin({
          provider: "Giscus",
          repo: "frievoe97/vuepress2",
          repoId: "R_kgDOI_nxNA",
          category:"General",
          categoryId:"DIC_kwDOI_nxNM4CUTuL"
        }),
      ],
}