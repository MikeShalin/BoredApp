import { inject, IReactComponent, observer } from 'mobx-react'
import { Dimensions } from 'react-native'

export const mobxInjected = (...models: Array<string>) => (Component: IReactComponent) => (
  inject(...models)(observer(Component))
)

export const { height: heightDevice, width: widthDevice } = Dimensions.get('window')
