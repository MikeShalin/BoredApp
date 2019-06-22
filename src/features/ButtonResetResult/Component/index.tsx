import React from 'react'
import { Button, Icon, Text } from 'native-base'

import { mobxInjected } from 'Utils/helpers'
import { Style } from 'Style/Button'

interface TProps {
  boredStore: {
    setResult: () => void
  },
  style: {
    justifyContent: 'center';
    width: '100%' ;
    height: 80;
  }
}

const ButtonResetResult = ({ boredStore, style }: TProps) => (
  <Button
    success
    rounded
    block
    large
    onPress={() => boredStore.setResult()}
    style={style }
  >
    <Text>Go to filters</Text>
    <Icon name='settings' />
  </Button>
)

export const ButtonResetResultInjected = Style(mobxInjected('boredStore')(ButtonResetResult))
