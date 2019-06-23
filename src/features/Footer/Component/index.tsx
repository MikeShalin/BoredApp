import React from 'react'
// @ts-ignore
import { compose, withHandlers } from 'recompose'
import {
  Footer as FooterrWrapper,
  FooterTab,
  Button,
  Icon,
} from 'native-base'
import { Home } from 'Screen/Home/Component'

interface TProps {
  goTo: (screen: string) => () => void,
}

export const Screeen = ({ goTo }: TProps) => {
  return (
    <FooterrWrapper>
      <FooterTab>
        <Button onPress={goTo('Home')}>
          <Icon name="home" active/>
        </Button>
        <Button onPress={goTo('Favorite')}>
          <Icon name="heart" />
        </Button>
      </FooterTab>
    </FooterrWrapper>
  )
}

interface TPropsNav {
  navigation: {
    current: {
      _navigation:{
        navigate: (routeName: string, params?: any) => void
      }
    }
  },
}

export const Footer = compose(
  withHandlers({
    goTo: ({ navigation }: TPropsNav) => (screen: string) => () => {
      navigation.current && navigation.current._navigation.navigate(screen)
    }
  })
)(Screeen)