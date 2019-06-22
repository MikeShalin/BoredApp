import { successResult, item } from '../fixtures'

describe('ApiMixin actions', () => {
  it('call onRequest', () => {
    item.onRequest()
    expect(item.isFetching).toBe(true)
  })

  it('call onSuccess', () => {
    expect(true).toBe(true)
    //@ts-ignore
    item.onSuccess({ data: successResult })
    expect(item.success).toBe(true)
    expect(item.isFetching).toBe(false)
    expect(item.result).toEqual(successResult)
  })

  it('call onFailure', () => {
    const error = new Error
    item.onFailure(error)
    expect(item.error).toEqual(error.toString())
    expect(item.isFetching).toBe(false)
    expect(item.success).toBe(false)
  })
})
