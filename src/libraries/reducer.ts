import { SET_SEARCH_TAG, SET_SELECTED_TAG } from 'src/libraries'

export const reducer = (
  state: StackOverflow.AppContext.State,
  action: StackOverflow.AppContext.Action,
) => {
  const { type, searchTag, selectedTag } = action

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
    default:
      return state
  }
}
