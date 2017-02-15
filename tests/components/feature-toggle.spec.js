import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { FeatureToggle } from '../../src/index'

chai.use(dirtyChai)

const { describe, it } = global

describe('feature toggle component', () => {
  it('renders children if toggle is enabled')
  it('ignores children if toggle is disabled')

  it('adds routes if toggle is enabled')
  it('ignores routes if toggle is disabled')
})
