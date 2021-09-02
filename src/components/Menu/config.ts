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
        href: 'https://pancakeswap.finance/swap?outputCurrency=0xDbADf0143C56f57CAf559e1ccE45290A4146fdA1',
        target: "_blank",
      },
      {
        label: t('Liquidity'),
        href: 'https://pancakeswap.finance/add/0xDbADf0143C56f57CAf559e1ccE45290A4146fdA1/BNB',
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
        href: 'https://dex.guru/token/0xdbadf0143c56f57caf559e1cce45290a4146fda1-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0xdbadf0143c56f57caf559e1cce45290a4146fda1',
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
