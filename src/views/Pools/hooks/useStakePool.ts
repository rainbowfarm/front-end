import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useMasterchef, useSousChef } from 'hooks/useContract'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const sousStake = async (sousChefContract, amount, decimals ,sousId) => {
  console.log(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
  const tx = await sousChefContract.deposit(sousId,new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
  const receipt = await tx.wait()
  return receipt.status
}

/* const sousStakeBnb = async (sousChefContract, amount, sousId) => {
  const tx = await sousChefContract.deposit(sousId,new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
  const receipt = await tx.wait()
  return receipt.status
}
 */
const useStakePool = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      await sousStake(sousChefContract, amount,decimals, sousId)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, sousChefContract, sousId],
  )
  return { onStake: handleStake }
}

export default useStakePool
