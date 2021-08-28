import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://pancakeswap.finance/swap',
        target: "_blank",
      },
      {
        label: t('Liquidity'),
        href: 'https://pancakeswap.finance/liquidity',
        target: "_blank",
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      // {
      //  label: 'PolyChart',
      //  href: 'https://app.polychart.io/explorer/polygon/0x8c79d1ccb5e5ea4df5e0ff14b59a305f2808ac93',
      // },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x2478132Df328Adf5A2A293ab8ec0dca6f82fE602-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://polygon.poocoin.app/tokens/0x2478132Df328Adf5A2A293ab8ec0dca6f82fE602',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contracts'),
        href: 'https://docs.rainbowfarm.finance/contract'
      },
      {
        label: t('Roadmap'),
        href: 'https://docs.rainbowfarm.finance/roadmap'
      },
      {
        label: t('Github'),
        href: 'https://github.com/rainbowfarm',
      },
      {
        label: t('Docs'),
        href: 'https://docs.rainbowfarm.finance',
      },
      {
        label: t('Contact'),
        href: 'https://docs.rainbowfarm.finance/about/developer',
      },
    ],
  },
]

export default config
