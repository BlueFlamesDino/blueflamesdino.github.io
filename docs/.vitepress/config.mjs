import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BlueFlamesDino",
  description: "",
  head: [['link', { rel: 'icon', href: '/BlueFlamesEnlarged.png' }]],
  themeConfig: {

    logo: '/BlueFlamesEnlarged.png',
    nav: [
      { text: '?', link: '/about' },
    ],

    sidebar:  {
      '/information/': [
        {
          text: 'Directories',
          base: '/information/directories/',
          items: [
            { text: 'Wiki-sites', link: 'wikis' },
            { text: 'Awesome Lists', link: 'lists' }
          ]
        },
        {
          text: 'Programming',
          base: '/information/programming/',
          items: [
            { text: 'Programming Languages', link: 'languages' },
          ]
        },
        {
          text: 'Guides',
          collapsed: true,
          base: '/information/guides/',
          items: [
            { text: 'Piracy Guide', link: 'piracy-guide' }
          ]
        }
      ],
      '/blueflamesgames/': [{
        text: 'BlueFlamesGames',
        link: '/blueflamesgames/',
        items: [
          { 
            text: 'Games',
            base: '/blueflamesgames/games/',
            items: [
              
            ]
          },
          { 
            text: 'Apps',
            base: '/blueflamesgames/apps/',
            items: [

            ]
          },
          { 
            text: 'Concepts',
            link: '/blueflamesgames/concepts'
          },
        ],
      }],
      '/philosophy/': [
        {
          text: 'Philosophy',
          link: '/philosophy',
          items: [
            // {
            //   text: 'Atheism',
            //   base: '/philosophy/atheism/',
            //   items: [
            //     { text: 'Atheist' },
            //     { text: 'Atheist 2' }
            //   ]
            // }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlueFlamesDino/blueflamesdino.github.io' }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

    footer: {
      message: 'A wiki-like site for BlueFlamesDino',
      copyright: '©️Never'
    },

  }
})