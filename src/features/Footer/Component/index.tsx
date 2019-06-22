import React from 'react'
import {
  Footer as FooterrWrapper,
  FooterTab,
  Button,
  Icon,
} from 'native-base'

export const Footer = () => (
  <FooterrWrapper>
    <FooterTab>
      <Button>
        <Icon name="home" active/>
      </Button>
      <Button>
        <Icon name="person" />
      </Button>
    </FooterTab>
  </FooterrWrapper>
)
