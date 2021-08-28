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
      56: '0x2478132Df328Adf5A2A293ab8ec0dca6f82fE602',
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
      56: '0x154122269ddc78010778c46f21286b181cb1dc09',
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
      56: '0x480faabda2d2fadb68531feaebbbf84f66513644',
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
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
