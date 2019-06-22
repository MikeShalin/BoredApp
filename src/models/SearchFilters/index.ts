import { types } from 'mobx-state-tree'

import { MainMixin } from './MainMixin'
import { DataMixin } from './DataMixin'

// @ts-ignore
export const SearchFilters = types.compose(
  DataMixin,
  MainMixin,
)
