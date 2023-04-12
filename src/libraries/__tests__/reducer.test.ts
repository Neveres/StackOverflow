import {
  reducer,
  SET_SEARCH_TAG,
  SET_SELECTED_TAG,
  SET_PAGE,
} from 'src/libraries'

describe('reducer', () => {
  test('should return expected state when type is "SET_SEARCH_TAG"', () => {
    const searchTag = 'java'
    expect(
      reducer(
        {} as StackOverflow.AppContext.State,
        {
          type: SET_SEARCH_TAG,
          searchTag,
        } as StackOverflow.AppContext.Action,
      ),
    ).toStrictEqual({
      searchTag,
    })
  })

  test('should return expected state when type is "SET_SELECTED_TAG"', () => {
    const selectedTag = 'java'
    expect(
      reducer(
        {} as StackOverflow.AppContext.State,
        {
          type: SET_SELECTED_TAG,
          selectedTag,
        } as StackOverflow.AppContext.Action,
      ),
    ).toStrictEqual({
      selectedTag,
    })
  })

  test('should return expected state when type is "SET_PAGE"', () => {
    const page = 2
    expect(
      reducer(
        {} as StackOverflow.AppContext.State,
        {
          type: SET_PAGE,
          page,
        } as StackOverflow.AppContext.Action,
      ),
    ).toStrictEqual({
      page,
    })
  })

  test('should return expected state when there was no type', () => {
    expect(
      reducer(
        {} as StackOverflow.AppContext.State,
        {} as StackOverflow.AppContext.Action,
      ),
    ).toStrictEqual({})
  })
})
