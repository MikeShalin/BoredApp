import React from 'react'
import {
  Content,
  Text,
  Card,
  CardItem,
  Right,
  Left,
} from 'native-base'

import { Result } from 'Types/.'
import { ActivityCard } from 'Features/ActivityCard/Component'

export const ActivityCardWrapper = ({
                               activity,
                               accessibility,
                               type,
                               participants,
                               price,
                             }: Result) => {
  const cards = [
    ['activity', activity],
    ['accessibility', accessibility],
    ['type', type],
    ['participants', participants],
    ['price', price],
  ]
  return (
    <Content>
      <Card>
        {
          cards.map(([name, value]) => (
            <ActivityCard
              key={name}
              name={String(name)}
              value={String(value)}
            />
          ))
        }
      </Card>
    </Content>
  )
}