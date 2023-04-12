import React from 'react'
import { create } from 'react-test-renderer'
import { Spinner } from 'src/components'

describe('Spinner', () => {
  test('should render well', () => {
    const testRenderer = create(<Spinner />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
