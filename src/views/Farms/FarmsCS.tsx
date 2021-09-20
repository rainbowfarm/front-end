import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom'
import PageHeader from 'components/PageHeader'
import { Image, Heading} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`
const FarmsCS: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader background="#544FA4">
      <img src= "/images/logo/rainbowfarmlogotext.png" alt="Rainbow Farm Finance logo" />        
      <Heading as="h2" scale="xxl" color="secondary" mb="24px">
          {t('Farms')}
        </Heading>
        <Heading scale="lg" color="secondary">
          {t('Stake LP tokens to earn RNBO.')}
        </Heading>
      </PageHeader>
      <Page>
      <StyledImage src="/images/logo/coming-soon.png" alt="Shining Rainbow" width={1000} height={630} />
        <StyledImage src="/images/logo/rainbow_icon.png" alt="Shining Rainbow" width={226} height={129} />
      </Page>
    </>
  )
}

export default FarmsCS
