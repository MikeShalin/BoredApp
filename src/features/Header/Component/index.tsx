import React from 'react'
import {
  Header as HeaderWrapper,
  Title,
  Left,
  Right,
  Body,
} from 'native-base'

export const Header = ({ children }: { children: any }) => (
  <HeaderWrapper>
    <Left />
    <Body>
      <Title>{children}</Title>
    </Body>
    <Right />
  </HeaderWrapper>
)
