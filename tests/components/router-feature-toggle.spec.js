import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { RouterFeatureToggle } from '../../src/index'

chai.use(dirtyChai)

const { describe, it } = global

describe('feature toggle component', () => {
  it('adds sub-routes if toggle is enabled')
  it('ignores sub-routes if toggle is disabled')
})
