[![build-status](https://travis-ci.org/Nilos/react-feature-toggles.svg?branch=master)](https://travis-ci.org/Nilos/react-feature-toggles)
[![Version](https://img.shields.io/npm/v/react-awesome-feature-toggles.svg)](https://www.npmjs.com/package/react-awesome-feature-toggles)

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/Nilos/react-feature-toggles/blob/master/LICENSE)
[![airbnb code style](https://img.shields.io/badge/code%20style-airbnb-fd5c63.svg)](https://github.com/airbnb/javascript)

---

This plugin provides a feature toggle component

## Features

- Set feature config and check if a toggle is enabled
- Use FeatureToggle Component to render children if a toggle is enabled
- Use FeatureToggle Component to render sub-routes if a toggle is enabled

## Getting Started

Install react-awesome-feature-toggles using npm:

`npm install --save react-awesome-feature-toggles`

## Usage

### Setting your feature config:

Use `setFeatureConfig` to set you config. It accepts an object with keys which will be used as the names of your features. It currently does not (yet) support nested objects

```Javascript
  import { setFeatureConfig } from 'react-awesome-feature-toggles'

  setFeatureConfig({
    "awesome.feature": true,
    "disabled.feature": false
  })
```

### Using the FeatureToggle Component

Now use the `<FeatureToggle />` Component to conditionally render children

```Javascript
  import { FeatureToggle } from 'react-awesome-feature-toggles'

  return (
    <div>
      <FeatureToggle name="awesome.feature">
        This text is rendered
      </FeatureToggle>
      <FeatureToggle name="disabled.feature">
        This text is not rendered
      </FeatureToggle>
    </div>
  )
```

You can also use `<FeatureToggle />` to enable routes conditionally. The disabled routes are taken from the route structure just like as if they do not exist:

```Javascript
  import { Route, IndexRoute, match } from 'react-router'
  import { FeatureToggle } from 'react-awesome-feature-toggles'

  const routes = (
    <Route name="home" path="/">
      <IndexRoute />
      <FeatureToggle name="awesome.feature">
        <Route name="route1" path="route1" />
      </FeatureToggle>
      <FeatureToggle name="disabled.feature">
        <Route name="route2" path="route2" />
      </FeatureToggle>
    </Route>)
```

This would lead to a router that matches `/route1` but not `/route2`.

## License

MIT
