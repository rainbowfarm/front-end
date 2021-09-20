import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { poolsConfig, farmsConfig } from 'config/constants'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
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

      const finalcall = calls.concat(poolcalls)
      const poolres = await multicall(masterChefABI, finalcall)
      setBalance(poolres)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
