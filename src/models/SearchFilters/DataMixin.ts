import { types } from 'mobx-state-tree'

const { string, maybeNull, model } = types

const Filters = {
  activity: maybeNull(string),
  accessibility: maybeNull(string),
  type: maybeNull(string),
  participants: maybeNull(string),
  price: maybeNull(string),
}

export const DataMixin = model('DataMixin', Filters)
