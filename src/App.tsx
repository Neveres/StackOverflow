import React from 'react'
import { Search, TrendingTags, QuestionListing } from 'src/components'

const App = () => {
  return (
    <div className="App">
      <Search />
      <TrendingTags />
      <QuestionListing />
    </div>
  )
}

export default App
