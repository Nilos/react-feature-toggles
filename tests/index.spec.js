import { expect } from 'chai'
import { sum } from '../src/index'

const { describe, it } = global

describe('sum', () => {
  it('should add two numbers correctly', () => {
    const result = sum(10, 20)
    expect(result).to.be.equal(30)
  })

  it('should return the same number if second param is null', () => {
    const result = sum(10, null)
    expect(result).to.be.equal(10)
  })
})
