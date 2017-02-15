import React from 'react'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { shallow } from 'enzyme'
import { Route, IndexRoute, match } from 'react-router'

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

  it('adds routes if toggle is enabled', (done) => {
    setFeatureConfig({ testFeature: true })

    const routes = (
      <Route name="home" path="/">
        <IndexRoute />
        <FeatureToggle name="testFeature">
          <Route name="route1" path="route1">
            <IndexRoute />
            <Route name="route1.sub" path=":routeId">
              <IndexRoute />
            </Route>
          </Route>
        </FeatureToggle>
        <Route name="route2" path="" />
      </Route>)

    match({ routes, location: '/route1/5' }, (err, redirect, props) => {
      expect(props).to.not.be.undefined()
      done()
    })
  })

  it('ignores routes if toggle is disabled', (done) => {
    setFeatureConfig({ testFeature: false })

    const routes = (
      <Route name="home" path="/">
        <IndexRoute />
        <FeatureToggle name="testFeature">
          <Route name="route1" path="route1">
            <IndexRoute />
            <Route name="route1.sub" path=":routeId">
              <IndexRoute />
            </Route>
          </Route>
        </FeatureToggle>
        <Route name="route2" path="" />
      </Route>)

    match({ routes, location: '/route1/5' }, (err, redirect, props) => {
      expect(props).to.be.undefined()
      done()
    })
  })
})
