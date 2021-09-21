import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { poolsConfig, farmsConfig } from 'config/constants'
import { PoolConfig, FarmConfig } from 'config/constants/types'
import useRefresh from './useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

export interface PoolWithBalance extends PoolConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const [poolsWithBalances, setPoolsWithBalances] = useState<PoolWithBalance[]>([])
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingRNBO',
        params: [farm.pid, account],
      }))

      const poolcalls = poolsConfig.map((pool) => ({
        address: getMasterChefAddress(),
        name: 'pendingRNBO',
        params: [pool.sousId, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const results = farmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      const poolsrawResults = await multicall(masterChefABI, poolcalls)
      const poolsresults = poolsConfig.map((pool, index) => ({ ...pool, balance: new BigNumber(poolsrawResults[index]) }))

      setFarmsWithBalances(results)
      setPoolsWithBalances(poolsresults)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return {farmsWithBalances,poolsWithBalances}
}

export default useFarmsWithBalance
