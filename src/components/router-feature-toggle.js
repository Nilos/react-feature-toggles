import { createRoutes } from 'react-router'
import { FeatureToggle } from './feature-toggle'

import { isToggleEnabled } from '../feature-toggles'

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

export default class RouterFeatureToggle extends FeatureToggle {}

RouterFeatureToggle.createRouteFromReactElement = (element) => {
  if (isToggleEnabled(element.props.name)) {
    return createRouteFromReactElement(element)
  }

  return null
}
