const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Slim.ai',
  // logo: '/img/codi_buffer_charcoal.png',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-2GSW2LQ847'
    }],
    ['script', {
      src: '/js/ga.js'
    }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: require.resolve('../../../'),
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'home',
        link: '/'
      },
      {
        text: 'team',
        link: '/team/',
      },
      {
        text: 'blog',
        link: '/blog/',
      }
    ],
    sidebar: {
      // '/team/': [
      //   {
      //     title: 'team',
      //     collapsable: false,
      //     childr ,mMen: [
      //     ]
      //   }
      // ],
    }
  },
  // section md
  markdown: {
    config: md => {
      md.set({ typographer: true }),
      md.use(require('markdown-it-footnote')),
      md.use(require('markdown-it-include')),
      md.use(require('markdown-it-multimd-table'))
    }
  },
  // end section md
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-159553615-2'
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
