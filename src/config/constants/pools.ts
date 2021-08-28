import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.rnbo,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.wbnb,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.busd,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 3,
    isFinished: false,
  },
]

export default pools
