import { waitFor, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useQuestions } from 'src/hooks'

const firstData = [
  {
    id: '4fd52714-3926-4e43-9488-01d0e2f63d18',
    name: 'Lew Schultz',
    username: 'Alysson_Weber68',
    avater: 'https://cdn.fakercloud.com/avatars/lebronjennan_128.jpg',
    isFollowing: false,
  },
]

const secondData = [
  {
    id: '9b1c64f8-dfb4-47f9-aa7f-43ef8ef5a3f8',
    name: 'Amanda Crooks',
    username: 'Kenton24',
    avater: 'https://cdn.fakercloud.com/avatars/swooshycueb_128.jpg',
    isFollowing: false,
  },
]

const mockResponse = {
  data: {
    has_more: true,
    items: [...firstData],
  },
}

jest.mock('src/libraries', () => ({
  ...jest.requireActual('src/libraries'),
  httpClient: { get: () => new Promise((resolve) => resolve(mockResponse)) },
}))

describe('useQuestions', () => {
  test('should return expected questions while selectedTag is empty', async () => {
    const { result } = renderHook(() => useQuestions('', 1))

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual([])
    })
  })

  test('should return expected questions while given selectedTag', async () => {
    const { result } = renderHook(() => useQuestions('java', 1))

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual(firstData)
    })
  })

  test('should return expected questions while page increase', async () => {
    let page = 1
    const { result, rerender } = renderHook(() => useQuestions('java', page))

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual(firstData)
    })

    mockResponse.data.items = [...secondData]

    page++
    act(() => {
      rerender()
    })

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual([
        ...firstData,
        ...secondData,
      ])
    })
  })

  test('should return expected questions while page increase', async () => {
    let selectedTag = 'java'
    const { result, rerender } = renderHook(() => useQuestions(selectedTag, 1))

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual(secondData)
    })

    mockResponse.data.items = [...firstData]

    selectedTag = 'javascript'
    act(() => {
      rerender()
    })

    await waitFor(() => {
      expect(result.current.questions).toStrictEqual(firstData)
    })
  })
})
