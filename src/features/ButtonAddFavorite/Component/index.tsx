import React from 'react'
import { localStorage } from 'Utils/helpers'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

//@ts-ignore
import { compose, withHandlers } from 'recompose'

import { ButtonMainEnhancer as ButtonMain } from 'Features/ButtonMain/Component'

const Button = ({ onHandler }: { onHandler: any }) => (
  <ButtonMain onHandler={onHandler} icon='heart' danger>
    ButtonAddFavorite
  </ButtonMain>
)

interface TPropsHandler {
  boredStore: {
    result: {
      key: string;
    }
  }
}

export const ButtonAddFavorite = compose(
  inject('boredStore'),
  withHandlers({
    onHandler: ({ boredStore: { result: { key, ...result } } }: TPropsHandler) => () => {
      localStorage.getItem('favorites').then(currentFavoriteStore => {
        const newStoreState = Object.assign(
          {},
          { [+key]: toJS(result) },
          currentFavoriteStore,
        )
        localStorage.setItem('favorites', JSON.stringify(newStoreState))
      })
    },
  }),
  observer,
)(Button)
