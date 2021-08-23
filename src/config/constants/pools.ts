import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 208,
    stakingToken: tokens.cake,
    earningToken: tokens.revv,
    contractAddress: {
      97: '',
      56: '0x8aa5b2c67852ed5334c8a7f0b5eb0ef975106793',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.331',
  },
  {
    sousId: 207,
    stakingToken: tokens.cake,
    earningToken: tokens.btt,
    contractAddress: {
      97: '',
      56: '0x3b804460c3c62f0f565af593984159f13b1ac976',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '263',
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
