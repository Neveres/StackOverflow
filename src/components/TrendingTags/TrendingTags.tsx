import React, { useMemo } from 'react'
import { useTags } from 'src/hooks'

const TrendingTags = () => {
  const { tags } = useTags()

  const Tags = useMemo(
    () => tags.map((tag) => <div key={tag}>{tag}</div>),
    [tags],
  )

  return (
    <div>
      <h1>Trending</h1>
      <div>{Tags}</div>
    </div>
  )
}

export default TrendingTags
