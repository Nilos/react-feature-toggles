let featureConfig = {}

export const isToggleEnabled = (toggleName) => {
  if (featureConfig[toggleName]) {
    return true
  }

  return false
}

export const setFeatureConfig = (config) => {
  featureConfig = config
}
