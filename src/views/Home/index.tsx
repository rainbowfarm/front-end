import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, BaseLayout, Image } from '@pancakeswap/uikit'
import PageSection from 'components/PageSection'
import Page from 'components/Layout/Page'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import TwitterCard from './components/TwitterCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import CakeStats from './components/CakeStats'
import FarmStakingCard from './components/FarmStakingCard'


const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.lg} {
  }
`


const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {

  const { t } = useTranslation()


  return (
    <>
    <Page>
      <Hero>
        <img src= "/images/logo/rainbowfarmlogotext.png" alt="Rainbow Farm Finance logo" />
        <Heading as="h1" scale="lg" mt="40px" mb="24px" color="secondary">          
        {t('Defi Yield Farming with lowest fees')}
        </Heading>
        <Heading as="h1" scale="md" mt="10px" mb="24px" color="secondary">
          {t('Farming will begin at ')}<a href="https://bscscan.com/block/countdown/10800000" rel="noreferrer" target="_blank">block #10800000</a>
        </Heading>  
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
      <StyledImage src="/images/logo/rainbow_icon.png" alt="Shining Rainbow" width={226} height={129} />
      </Page>
    </>
  )
}

export default Home
