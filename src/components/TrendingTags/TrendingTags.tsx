/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useEffect, useCallback } from 'react'
import { useTags } from 'src/hooks'
import { AppContext } from 'src/components'
import { trendingTagsContainer } from './styles'

const DEFAULT_INDEX_OF_SELECTED_TAG = 0

const TrendingTags = () => {
  const { tags } = useTags()
  const {
    state: { selectedTag, searchTag },
    actions: { setSelectedTag },
  } = useContext(AppContext)

  const onClickTag = useCallback(
    (tag: string) => {
      setSelectedTag(tag)
    },
    [setSelectedTag],
  )

  const Tags = useMemo(
    () =>
      tags
        .filter((tag) => {
          return tag.includes(searchTag)
        })

        .map((tag) => (
          <div
            key={tag}
            className={`tagContainer ${selectedTag === tag ? 'selected' : ''}`}
            onClick={onClickTag.bind(null, tag)}
          >
            {tag}
          </div>
        )),
    [onClickTag, searchTag, selectedTag, tags],
  )

  useEffect(() => {
    if (!selectedTag && tags.length) {
      setSelectedTag(tags[DEFAULT_INDEX_OF_SELECTED_TAG])
    }
  }, [selectedTag, setSelectedTag, tags, tags.length])

  return (
    <div css={trendingTagsContainer}>
      <h1>Trending</h1>
      <div>{Tags}</div>
    </div>
  )
}

export default TrendingTags
