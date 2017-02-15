import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { isToggleEnabled, setFeatureConfig, FeatureToggle } from '../src/index'

chai.use(dirtyChai)

const { describe, it } = global

describe('exports are defined', () => {
  it('isToggleEnabled should be defined', () => {
    expect(isToggleEnabled).to.not.be.undefined()
  })

  it('setFeatureConfig should be defined', () => {
    expect(setFeatureConfig).to.not.be.undefined()
  })

  it('FeatureToggle should be defined', () => {
    expect(FeatureToggle).to.not.be.undefined()
  })
})
