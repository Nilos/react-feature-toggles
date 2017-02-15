import React, { Component } from 'react'
import { createRoutes } from 'react-router'

import { isToggleEnabled } from '../feature-toggles'

export default class FeatureToggle extends Component {
  render() {
    if (isToggleEnabled(this.props.name)) {
      return this.props.children
    }

    return null
  }
}

FeatureToggle.propTypes = {
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
}

function createRoute(defaultProps, props) {
  return { ...defaultProps, ...props }
}

function createRouteFromReactElement(element) {
  const type = element.type
  const route = createRoute(type.defaultProps, element.props)

  if (route.children) {
    const childRoutes = createRoutes(route.children, route)

    if (childRoutes.length) {
      route.childRoutes = childRoutes
    }

    delete route.children
  }

  return route
}

FeatureToggle.createRouteFromReactElement = (element) => {
  if (isToggleEnabled(element.props.name)) {
    return createRouteFromReactElement(element)
  }

  return null
}
