import { defaultTheme } from 'vuepress'

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
}
