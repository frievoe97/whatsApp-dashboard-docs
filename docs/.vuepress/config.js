import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
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
      theme: defaultTheme({

        title: 'Test',

        locales: {
          '/': {
            selectLanguageName: 'German',
            logo: 'https://cloud.friedrichvoelkers.de/public/projects/find-mr-x/img09.png',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/docs/',
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
              },
          },
          '/en/': {
            selectLanguageName: 'English',
            logo: 'https://cloud.friedrichvoelkers.de/public/projects/find-mr-x/img09.png',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/en/docs/',
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
              },
          },
        },
      }),
      plugins: [
        backToTopPlugin(),
        commentPlugin({
          provider: "Giscus",
          repo: "frievoe97/vuepress2",
          repoId:"R_kgDOI_nxNA",
          category:"General",
          categoryId:"DIC_kwDOI_nxNM4CUTuL",
          inputPosition: "bottom"
        }),
        searchPlugin({
          locales: {
            '/': {
              placeholder: 'Suche',
            },
            '/en/': {
              placeholder: 'Search',
            },
          },
        }),
      ],
}
