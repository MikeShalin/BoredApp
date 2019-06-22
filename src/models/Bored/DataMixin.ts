import { types } from 'mobx-state-tree'

const {
  string,
  number,
  maybeNull,
  boolean,
  model,
} = types

const Bored = {
  activity: string,
  accessibility: number,
  type: string,
  participants: number,
  price: number,
  link: string,
  key: string,
}

export const DataMixin = model('DataMixin', {
  isFetching: boolean,
  error: maybeNull(string),
  success: maybeNull(boolean),
  result: maybeNull(model('Bored', Bored)),
})
