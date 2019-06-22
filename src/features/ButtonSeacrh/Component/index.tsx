import React from 'react'
import { Button, Icon, Text } from 'native-base'

import { mobxInjected } from 'Utils/helpers'
import { Result } from 'Types/.'
import { Style } from 'Style/Button'

interface TProps {
  boredStore: {
    getActivity: () => void;
    result: Result;
    isFetching: boolean;
  },
  style: {
    justifyContent: 'center';
    width: '100%' ;
    height: 80;
  }
}

const ButtonSeacrh = ({ boredStore: { getActivity }, style }: TProps) => (
  <Button
    info
    rounded
    large
    onPress={getActivity}
    style={style}
  >
    <Text>Get activity</Text>
    <Icon name='bicycle' />
  </Button>
)

export const ButtonSeacrhInjected = Style(mobxInjected('boredStore', 'searchFilters')(ButtonSeacrh))
