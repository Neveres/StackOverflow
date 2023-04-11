import React from 'react'
import { Layout } from 'antd'
import { Search, TrendingTags, QuestionListing } from 'src/components'
import { GlobalCss } from './GlobalCss'

const { Header, Content } = Layout

const App = () => {
  return (
    <div className="App">
      <Header>
        <Search />
        <TrendingTags />
      </Header>
      <Content>
        <QuestionListing />
      </Content>

      <GlobalCss />
    </div>
  )
}

export default App
