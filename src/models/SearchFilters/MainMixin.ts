import { types } from 'mobx-state-tree'

export const MainMixin = types
  .model('MainMixin')
  .actions(self => ({
    setFilter({ name, value }: { name: string, value: string }) {
      // @ts-ignore
      self[name] = value
    },
  }))
