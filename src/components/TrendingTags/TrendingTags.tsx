/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react'
import { useTags } from 'src/hooks'
import { trendingTagsContainer } from './styles'

const TrendingTags = () => {
  const { tags } = useTags()

  const Tags = useMemo(
    () =>
      tags.map((tag) => (
        <div key={tag} className="tagContainer">
          {tag}
        </div>
      )),
    [tags],
  )

  return (
    <div css={trendingTagsContainer}>
      <h1>Trending</h1>
      <div>{Tags}</div>
    </div>
  )
}

export default TrendingTags
