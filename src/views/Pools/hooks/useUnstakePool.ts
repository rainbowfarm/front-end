import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef, useSousChef } from 'hooks/useContract'
import { BIG_TEN } from 'utils/bigNumber'

const sousUnstake = async (sousId, sousChefContract, amount, decimals) => {
  console.log(amount)
  const tx = await sousChefContract.withdraw(sousId, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
  const receipt = await tx.wait()
  return receipt.status
}

const sousEmergencyUnstake = async (sousId, sousChefContract) => {
  const tx = await sousChefContract.emergencyWithdraw(sousId)
  const receipt = await tx.wait()
  return receipt.status
}

const useUnstakePool = (sousId, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        await sousEmergencyUnstake(sousId, sousChefContract)
      } else {
        await sousUnstake(sousId, sousChefContract, amount, decimals)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
