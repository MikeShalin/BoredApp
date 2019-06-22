import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { HomeScreen } from 'Features/HomeScreen/Component'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen  },
  }, {
    headerMode: 'none',
  },
)

export const Navigation = createAppContainer(AppNavigator)
