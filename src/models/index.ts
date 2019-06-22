import { types } from 'mobx-state-tree'

import { Bored } from './Bored'
import { SearchFilters } from './SearchFilters'

const Root = types
  .model('RootModel', {
    boredStore: types.optional(Bored, {
      isFetching: false,
      error: null,
      success: null,
      result: null,
    }),
    searchFilters: types.optional(SearchFilters, {
      activity: null,
      accessibility: null,
      type: null,
      participants: null,
      price: null,
    }),
  })

export const RootModel = Root.create({})
