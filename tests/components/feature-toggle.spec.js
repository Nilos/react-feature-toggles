import React from 'react'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { shallow } from 'enzyme'
import { FeatureToggle, setFeatureConfig } from '../../src/index'

chai.use(dirtyChai)

const { describe, it } = global

describe('<FeatureToggle/>', () => {
  it('renders children if toggle is enabled', () => {
    setFeatureConfig({ testFeature: true })

    const wrapper = shallow(
      <FeatureToggle name="testFeature">
        <div>Test</div>
      </FeatureToggle>)

    expect(wrapper.find('div')).to.have.length(1)
  })

  it('ignores children if toggle is disabled', () => {
    setFeatureConfig({ testFeature: false })

    const wrapper = shallow(
      <FeatureToggle name="testFeature">
        <div>Test</div>
      </FeatureToggle>)

    expect(wrapper.find('div')).to.have.length(0)
  })

  it('adds routes if toggle is enabled')
  it('ignores routes if toggle is disabled')
})
