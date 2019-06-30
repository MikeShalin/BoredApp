import { inject, IReactComponent, observer } from 'mobx-react'
//@ts-ignore
import { compose } from 'recompose'
import { Dimensions } from 'react-native'
export { localStorage } from './localStorage'

export const mobxInjected = (...models: Array<string>) => (Component: IReactComponent) => (
  compose(inject(...models), observer)(Component)
)

export const { height: heightDevice, width: widthDevice } = Dimensions.get('window')
