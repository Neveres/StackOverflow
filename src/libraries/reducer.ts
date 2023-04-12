import { SET_SEARCH_TAG, SET_SELECTED_TAG, SET_PAGE } from 'src/libraries'

export const reducer = (
  state: StackOverflow.AppContext.State,
  action: StackOverflow.AppContext.Action,
) => {
  const { type, searchTag, selectedTag, page } = action

  switch (type) {
    case SET_SEARCH_TAG:
      return {
        ...state,
        searchTag,
      }
    case SET_SELECTED_TAG:
      return {
        ...state,
        selectedTag,
      }
    case SET_PAGE:
      return {
        ...state,
        page,
      }
    default:
      return state
  }
}
