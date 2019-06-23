import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { Home } from 'Screen/Home/Component'
import { Favorite } from 'Screen/Favorite/Component'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Favorite: { screen: Favorite },
  }, {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
)

export const Navigation = createAppContainer(AppNavigator)
