import React from 'react'

import { ButtonMainEnhancer as ButtonMain } from 'Features/ButtonMain/Component'

export const ButtonAddFavorite = () => (
  <ButtonMain onHandler={() => console.log('lol')} icon='heart' danger>
    ButtonAddFavorite
  </ButtonMain>
)
