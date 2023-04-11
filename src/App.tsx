import React, { useMemo, useReducer } from 'react'
import { Layout } from 'antd'
import {
  Search,
  TrendingTags,
  QuestionListing,
  AppContext,
} from 'src/components'
import { reducer, SET_SEARCH_TAG, SET_SELECTED_TAG } from 'src/libraries'
import { GlobalCss } from './GlobalCss'

const { Header, Content } = Layout

const initialState = {
  searchTag: '',
  selectedTag: '',
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMemo(
    () => ({
      setSearchTag(searchTag: string) {
        dispatch({ type: SET_SEARCH_TAG, ...state, searchTag })
      },
      setSelectedTag(selectedTag: string) {
        dispatch({ type: SET_SELECTED_TAG, ...state, selectedTag })
      },
    }),
    [state],
  )

  const valueOfAppContext = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  )

  return (
    <div className="App">
      <AppContext.Provider value={valueOfAppContext}>
        <Header>
          <Search />
          <TrendingTags />
        </Header>
        <Content>
          <QuestionListing />
        </Content>
      </AppContext.Provider>

      <GlobalCss />
    </div>
  )
}

export default App
