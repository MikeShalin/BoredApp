import { types } from 'mobx-state-tree'
import { Result } from 'Types/.'

export const MainMixin = types
  .model('MainMixin')
  .actions(self => ({
    setFetching(isFetching: boolean) {
      // @ts-ignore
      self.isFetching = isFetching
    },
    setError(error: Error) {
      // @ts-ignore
      self.error = error.toString()
    },
    setSuccess(isSuccess: boolean) {
      // @ts-ignore
      self.success = isSuccess
    },
    setResult(result: Result) {
      // @ts-ignore
      self.result = result
    },
  }))
