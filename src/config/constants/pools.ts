import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.rnbo,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.wbnb,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 5,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.busd,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 6,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.cake,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.usdt,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 7,
    isFinished: false,
  },
  {
    sousId: 9,
    stakingToken: tokens.btcb,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 10,
    stakingToken: tokens.eth,
    earningToken: tokens.rnbo,
    contractAddress: {
      97: '0xE707617e5e35b9c3f030534d2e81BD52F7bb5CF0',
      56: '0x8064A0058EfA9af75634635d764939D87700CBa0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3',
    sortOrder: 4,
    isFinished: false,
  },
]

export default pools
