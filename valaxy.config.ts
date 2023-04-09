import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonComponents } from "valaxy-addon-components";

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  addons: [
    addonComponents(),
  ],

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '雷猫的小屋',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      icon: {
        title: 'leicat.top',
        url: 'http://leicat.top',
      },
      powered: true,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },

    bg_image: {
      /**
       * @en Enable background image
       */
      enable: true,
      /**
       * @en Image url
       */
      url: 'http://leicat.ueuo.com/cos_pics/site/bg3.webp',
      /**
       * @en Image url when dark mode
       */
      dark: 'http://leicat.ueuo.com/cos_pics/site/bg3.webp',
      /**
       * @en Image opacity
       */
      //opacity?: number
    },
  },

  unocss: { safelist },
})
