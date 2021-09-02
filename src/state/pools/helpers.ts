import BigNumber from 'bignumber.js'
import { Farm, Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

type UserData =
  | Pool['userData']
  | {
      allowance: number | string
      stakingTokenBalance: number | string
      stakedBalance: number | string
      pendingReward: number | string
      withdrawFees: number | string
    }

export const transformUserData = (userData: UserData) => {
  return {
    allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
    stakingTokenBalance: userData ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO,
    stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
    pendingReward: userData ? new BigNumber(userData.pendingReward) : BIG_ZERO,
    withdrawFees: userData ? new BigNumber(userData.withdrawFees) : BIG_ZERO,
  }
}

export const transformPool = (pool: Pool): Pool => {
  const { totalStaked, stakingLimit, userData, ...rest } = pool

  return {
    ...rest,
    userData: transformUserData(userData),
    totalStaked: new BigNumber(totalStaked),
    stakingLimit: new BigNumber(stakingLimit),
  } as Pool
}

export const getTokenPricesFromFarm = (farms: Farm[]) => {
  const rnbobusd = farms.find(x => x.pid === 1).tokenPriceVsQuote
  const bnbbusd = farms.find(x => x.pid === 5).tokenPriceVsQuote

  return farms.reduce((prices, farm) => {
    if(farm.pid !== 0){
    const quoteTokenAddress = getAddress(farm.quoteToken.address).toLocaleLowerCase()
    const tokenAddress = getAddress(farm.token.address).toLocaleLowerCase()
    /* eslint-disable no-param-reassign */
    prices["0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"] = 1;
    if (!prices[quoteTokenAddress]) {
      if(farm.quoteToken.symbol === "wBNB"){
        prices[quoteTokenAddress] = new BigNumber(bnbbusd).toNumber()
      }
      else if(farm.quoteToken.symbol === "BUSD"){
        prices[quoteTokenAddress] = 1
      }
      else{
        prices[quoteTokenAddress] = farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "BUSD") ? new BigNumber(farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "BUSD").tokenPriceVsQuote).toNumber()
        : farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "wBNB") ? new BigNumber(farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "wBNB").tokenPriceVsQuote).toNumber()*new BigNumber(bnbbusd).toNumber() : 0 
      }
    }
    if (!prices[tokenAddress]) {
      if(farm.quoteToken.symbol === "BUSD"){
        prices[tokenAddress] = farm.tokenPriceVsQuote
      }
      else if(farm.quoteToken.symbol === "wBNB"){
        prices[tokenAddress] = new BigNumber(farm.tokenPriceVsQuote).toNumber()*new BigNumber(bnbbusd).toNumber()
      }
      else{
        prices[tokenAddress] = farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "BUSD") ? 
        new BigNumber(farm.tokenPriceVsQuote).toNumber()*new BigNumber(farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "BUSD").tokenPriceVsQuote).toNumber() 
        : farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "wBNB") 
          ? new BigNumber(farm.tokenPriceVsQuote).toNumber()*new BigNumber(farms.find(x => x.pid !== 0 && x.token.symbol === farm.quoteToken.symbol && x.quoteToken.symbol === "wBNB").tokenPriceVsQuote).toNumber()*(new BigNumber(bnbbusd).toNumber()) : 0
      }
    }
    }  /* eslint-enable no-param-reassign */
    return prices
  }, {})
}
