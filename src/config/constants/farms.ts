import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'RNBO',
    lpAddresses: {
      97: '0x9d2d0a9e480c6dD04Eb4063e70e0c5cCC9280C01',
      56: '0xDbADf0143C56f57CAf559e1ccE45290A4146fdA1',
    },
    token: tokens.rnbo,
    quoteToken: tokens.wbnb,
    isTokenOnly : true,
  },
  {
    pid: 1,
    lpSymbol: 'RNBO-BUSD LP',
    lpAddresses: {
      97: '0x154122269ddc78010778c46f21286b181cb1dc09',
      56: '0xdf490da950893f3be946dfebae9e6ccc0f9090ec',
    },
    token: tokens.rnbo,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 2,
    lpSymbol: 'RNBO-BNB LP',
    lpAddresses: {
      97: '0xc568036b0cdFdBE21B357aF67707D20aBb51360A',
      56: '0x382245200621ad350c0c5d7e01c1184a7bbd2ab5',
    },
    token: tokens.rnbo,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 7,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 10,
    lpSymbol: 'MDX-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc',
    },
    token: tokens.mdx,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 13,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: tokens.btcb,
    quoteToken: tokens.eth,
    isTokenOnly : false,
  },
  {
    pid: 15,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 16,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 17,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
    },
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 18,
    lpSymbol: 'btcEPS LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x2a435Ecb3fcC0E316492Dc1cdd62d0F189be5640',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 19,
    lpSymbol: '3EPS LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0xaF4dE8E872131AE328Ce21D909C74705d3Aaf452',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 20,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 21,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  {
    pid: 22,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
    isTokenOnly : false,
  },
  {
    pid: 23,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    isTokenOnly : false,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
