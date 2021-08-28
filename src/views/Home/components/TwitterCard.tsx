import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'


const StyledTwitterCard = styled(Card)`
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

const TwitterCard = () => {

  const { t } = useTranslation()
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'rainbowfarmfin'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
            width: "400",
            theme: isDark ? 'dark' : 'light'
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
