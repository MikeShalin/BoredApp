import { types, getRoot } from 'mobx-state-tree'
import { toJS } from 'mobx'

import { callApi } from 'Utils/callApi'
import { API_ROOT } from 'Config/.'
import { Result } from 'Types/.'

export const ApiMixin = types
  .model('ApiMixin')
  .actions(self => ({
    onRequest() {
      //@ts-ignore
      self.setFetching(true)
    },

    onSuccess({ data }: { data: Result }) {
      //@ts-ignore
      self.setFetching(false)
      //@ts-ignore
      self.setSuccess(true)
      //@ts-ignore
      self.setResult(data)
    },

    onFailure(error: Error) {
      //@ts-ignore
      self.setFetching(false)
      //@ts-ignore
      self.setSuccess(false)
      //@ts-ignore
      self.setError(error.toString())
    },

    getActivity() {

      const url = `${API_ROOT}`

      const filters = toJS(getRoot(self).searchFilters)

      return callApi({
        url,
        config: {
          params: { ...filters },
        },
        //@ts-ignore
        onRequest: self.onRequest,
        //@ts-ignore
        onSuccess: self.onSuccess,
        //@ts-ignore
        onError: self.onFailure,
      })
    },
  }))
