import React from 'react'
import BigNumber from 'bignumber.js'
import { CalculateIcon, IconButton, useModal } from '@pancakeswap/uikit'
import { Address } from 'config/constants/types'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface ApyButtonProps {
  lpLabel?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  apy?: number
  displayApr?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({
  lpLabel,
  addLiquidityUrl, 
  cakePrice,
  apy,
  displayApr,
}) => {
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      lpLabel={lpLabel}
      addLiquidityUrl={addLiquidityUrl}
      cakePrice={cakePrice}
      apy={new BigNumber(apy)}
      displayApr={displayApr}
    />,
  )

  return (
    <IconButton onClick={onPresentApyModal} variant="text" scale="sm" ml="4px">
      <CalculateIcon />
    </IconButton>
  )
}

export default ApyButton
