import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { isToggleEnabled, setFeatureConfig } from '../src/index'

chai.use(dirtyChai)

const { describe, it } = global

describe('feature toggles config', () => {
  it('isToggleEnabled should return false without config', () => {
    expect(isToggleEnabled('any.key')).to.be.false()
  })

  it('isToggleEnabled should return true if config value is true', () => {
    setFeatureConfig({
      'any.key': true,
    })

    expect(isToggleEnabled('any.key')).to.be.true()
  })

  it('isToggleEnabled should not expand keys', () => {
    setFeatureConfig({
      any: {
        key: true,
      },
    })

    expect(isToggleEnabled('any.key')).to.be.false()
  })

  it('isToggleEnabled should work with undefined config', () => {
    setFeatureConfig()

    expect(isToggleEnabled('any.key')).to.be.false()
  })

  it('isToggleEnabled should throw on not object input', () => {
    expect(() => {
      setFeatureConfig(5)
    }).to.throw()
  })
})
