import React, { Component } from 'react'

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
