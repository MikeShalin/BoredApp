import React, { ReactChild } from 'react'
import {
  Text,
  CardItem,
  Right,
  Left,
} from 'native-base'

interface TProps {
  name: string,
  value: string
}

export const ActivityCard = ({ name, value }: TProps) => (
  <CardItem key={name} bordered>
    <Left>
      <Text>{name}:</Text>
    </Left>
    <Right>
      <Text>{value}</Text>
    </Right>
  </CardItem>
)