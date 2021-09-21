import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward, fetchPoolsUserDataAsync } from 'state/actions'
import { soushHarvest, soushHarvestBnb, harvest } from 'utils/callHelpers'
import harvestPool from 'views/Pools/hooks/useHarvestPool'
import { poolsConfig, farmsConfig } from 'config/constants'
import { useMasterchef, useSousChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    const farmsToFetch = farmsConfig
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)
    dispatch(fetchFarmUserDataAsync(account,pids))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const usePoolHarvest = (poolPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvestPool(poolPid, false)
    const poolsToFetch = poolsConfig
    const pids = poolsToFetch.map((poolToFetch) => poolToFetch.sousId)
    dispatch(fetchPoolsUserDataAsync(account))
    return txHash
  }, [account, dispatch, poolPid])

  return { onReward: handleHarvest }
}


export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}

export const usePoolAllHarvest = (poolPids: number[]) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = poolPids.reduce((accum, sousId) => {
      return [...accum, harvest(masterChefContract, sousId, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, poolPids, masterChefContract])

  return { onPoolReward: handleHarvest }
}

export const useSousHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (sousId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await soushHarvestBnb(sousChefContract, account)
    } else {
      await soushHarvest(sousChefContract, account)
    }
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId])

  return { onReward: handleHarvest }
}
