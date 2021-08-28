import React, { useMemo } from 'react'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Fees from 'components/Balance'
import { Pool } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface WithdrawFeeCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const WithdrawFeeCell: React.FC<WithdrawFeeCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { sousId , userData } = pool
  const withdrawFees = ((userData.withdrawFees.toNumber() > 0 ? userData.withdrawFees.toNumber() : pool.poolWithdrawFee)/100)

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Withdraw Fee %')}
        </Text>
          <Flex height="20px" alignItems="center">
            <Fees fontSize="16px" value={withdrawFees} decimals={1}/>
          </Flex>
      </CellContent>
    </StyledCell>
  )
}

export default WithdrawFeeCell
