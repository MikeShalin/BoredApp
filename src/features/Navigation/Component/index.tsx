import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { Home } from 'Screen/Home/Component'

const AppNavigator = createStackNavigator({ Home }, {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
)

export const Navigation = createAppContainer(AppNavigator)
