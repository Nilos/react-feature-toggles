let featureConfig = {}

export const isToggleEnabled = (toggleName) => {
  if (featureConfig[toggleName]) {
    return true
  }

  return false
}

export const setFeatureConfig = (config = {}) => {
  if (typeof config !== 'object') {
    throw new Error('Feature config has to be an object')
  }

  featureConfig = config
}
