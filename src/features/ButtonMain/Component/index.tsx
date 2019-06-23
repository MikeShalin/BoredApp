import React from 'react'
import { Button, Icon, Text } from 'native-base'

import { Style } from 'Style/Button'

interface TProps {
  onHandler: () => void;
  style: {
    justifyContent: 'center';
    width: '100%' ;
    height: 80;
  },
  children: string;
  icon: string;
}

const ButtonMain = ({
                      onHandler,
                      children,
                      style,
                      icon,
                      ...color
}: TProps) => (
  <Button
    rounded
    block
    large
    onPress={onHandler}
    style={style}
    {...color}
  >
    <Text>{children}</Text>
    <Icon name={icon} />
  </Button>
)

export const ButtonMainEnhancer = Style(ButtonMain)
