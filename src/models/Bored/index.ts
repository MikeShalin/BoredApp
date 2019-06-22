import { types } from 'mobx-state-tree'

import { MainMixin } from './MainMixin'
import { ApiMixin } from './ApiMixin'
import { DataMixin } from './DataMixin'

// @ts-ignore
export const Bored = types.compose(
  DataMixin,
  MainMixin,
  ApiMixin,
)
