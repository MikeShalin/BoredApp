import { successResult, item } from '../fixtures'

const getActivity = jest.fn((status: string) => (res?: any) => {
  if (status === 'onRequest') {
    item.onRequest()
  }
  if (status === 'onSuccess') {
    item.onSuccess({ data: res })
  }
  if (status === 'onError') {
    item.onFailure(res)
  }
})

describe('ApiMixin call', () => {
  it('call with onRequest flag', () => {
    getActivity('onRequest')()
    expect(item.isFetching).toBe(true)
  })

  it('call with onSuccess flag', () => {
    getActivity('onSuccess')(successResult)
    expect(item.success).toBe(true)
    expect(item.isFetching).toBe(false)
    expect(item.result).toEqual(successResult)
  })

  it('call with onFailure flag', () => {
    const error = new Error
    getActivity('onError')(error)
    expect(item.error).toEqual(error.toString())
    expect(item.isFetching).toBe(false)
    expect(item.success).toBe(false)
  })
})
