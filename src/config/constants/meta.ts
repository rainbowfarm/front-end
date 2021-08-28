import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RainbowFarm',
  description:
    'Stake & Earn with minimum Fees and maximum freedom',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RainbowFarm')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RainbowFarm')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RainbowFarm')}`,
      }
    default:
      return null
  }
}
