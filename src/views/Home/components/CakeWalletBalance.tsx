import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWalletBalance = ({ cakeBalance }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return <CardValue value={cakeBalance} fontSize="24px" />
}

export default CakeWalletBalance
