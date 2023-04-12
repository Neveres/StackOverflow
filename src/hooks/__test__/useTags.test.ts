import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useTags } from 'src/hooks'

const response = {
  data: {
    items: [
      {
        id: 'ace46791-391c-4bc4-b6cf-e2150491ac18',
        name: 'Rustic Fresh Cheese',
        count: 0,
      },
    ],
  },
}

jest.mock('src/libraries', () => ({
  ...jest.requireActual('src/libraries'),
  httpClient: { get: () => new Promise((resolve) => resolve(response)) },
}))

describe('useTags', () => {
  test('should return expected tags', async () => {
    const { result } = renderHook(useTags)

    await waitFor(() => {
      setTimeout(() => {
        expect(result.current.tags).toStrictEqual(['Rustic Fresh Cheese'])
      }, 2000)
    })
  })
})
