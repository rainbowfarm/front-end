import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress, getRNBOAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import { useTotalValue } from 'state/hooks'
import { useFarms,usePriceBnbBusd,usePriceCakeBusd } from 'state/farms/hooks'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getRNBOAddress())
  const RNBOPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = RNBOPrice.times(circSupply);
  const rewardPerBlock = 4;

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Rainbow Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Maximum Supply')}</Text>
          <Text bold fontSize="14px">{t('30 M')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{t('New RNBO/block')}</Text>
          <Text bold fontSize="14px">{t('4')}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
