import React, { useMemo } from 'react'
import { HelpIcon, Skeleton, useTooltip, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { Pool } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface TotalStakedCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`
const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`
const ReferenceElement = styled.div`
  display: inline-block;
`

const MultiplierCell: React.FC<TotalStakedCellProps> = ({ pool }) => {
  const { t } = useTranslation()

  const tooltipContent = (
    <>
      {t('The multiplier represents the amount of RNBO rewards each farm gets.')}
      <br />
      <br />
      {t('For example, if a 1x farm was getting 1 RNBO per block, a 40x farm would be getting 40 RNBO per block.')}
    </>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: 'top-end',
    tooltipOffset: [20, 10],
  })


  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Multiplier')}
        </Text>
        <Container>
      <MultiplierWrapper>{pool.poolAllocPoints/10}x</MultiplierWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
      </CellContent>
    </StyledCell>
  )
}

export default MultiplierCell
