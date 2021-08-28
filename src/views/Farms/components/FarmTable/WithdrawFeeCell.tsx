import React, { useMemo } from 'react'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Fees from 'components/Balance'
import styled from 'styled-components'
import { Farm } from 'state/types'

export interface FeeProps {
  userwithdrawFee?: BigNumber
  poolWithdrawFee?: BigNumber
}

const FeeWrapper = styled.div`
  min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`


const WithdrawFeeCell: React.FC<FeeProps> = ({ userwithdrawFee,poolWithdrawFee }) => {
  const { t } = useTranslation()
  const withdrawFees = ((userwithdrawFee ? userwithdrawFee.toNumber() : (poolWithdrawFee).toNumber())/100)

  return (
    <Container>
      <FeeWrapper>
      <Text>{withdrawFees.toFixed(2)}</Text>
      </FeeWrapper>
    </Container>
  )
}

export default WithdrawFeeCell
