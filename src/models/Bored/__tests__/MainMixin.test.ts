import { successResult, item } from '../fixtures'

describe('MainMixin', () => {
  it('creates an instance of model', () => {
    expect(item.isFetching).toBe(false)
    expect(item.error).toBe(null)
    expect(item.success).toBe(null)
    expect(item.result).toBe(null)
  })

  it('sets fetch flag', () => {
    const isFetching = true
    item.setFetching(isFetching)
    expect(item.isFetching).toBe(isFetching)
  })

  it('sets success flag', () => {
    const isSucces = true
    item.setSuccess(isSucces)
    expect(item.success).toBe(isSucces)
  })

  it('adds error message to item', () => {
    const error = new Error
    item.setError(error)
    expect(item.error).toEqual(error.toString())
  })

  it('adds call api result', () => {
    item.setResult(successResult)
    expect(item.result).toEqual(successResult)
  })

  it('adds call api result some shit', () => { //todo описать тест

    // item.setResult({ res: 0 })
    // expect(item.error).toEqual(error.errors)
    expect(true).toBe(true)
  })
})
