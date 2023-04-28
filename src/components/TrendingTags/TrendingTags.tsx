/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useEffect, useCallback } from 'react'
import { useTags } from 'src/hooks'
import { AppContext } from 'src/components'
import { trendingTagsContainer } from './styles'

const DEFAULT_INDEX_OF_SELECTED_TAG = 0

const TrendingTags = () => {
  const {
    state: { selectedTag, searchTag },
    actions: { setSelectedTag, setPage },
  } = useContext(AppContext)
  const { tags } = useTags(searchTag)

  const resetPage = useCallback(() => {
    setPage(1)
  }, [setPage])

  const onClickTag = useCallback(
    (tag: string) => {
      setSelectedTag(tag)
      resetPage()
    },
    [resetPage, setSelectedTag],
  )

  const Tags = useMemo(
    () =>
      tags.map((tag) => (
        <div
          key={tag}
          className={`tagContainer ${selectedTag === tag ? 'selected' : ''}`}
          onClick={onClickTag.bind(null, tag)}
        >
          {tag}
        </div>
      )),
    [onClickTag, selectedTag, tags],
  )

  useEffect(() => {
    if (tags.length) {
      setSelectedTag(tags[DEFAULT_INDEX_OF_SELECTED_TAG])
      resetPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags])

  return (
    <div css={trendingTagsContainer}>
      <h1>Trending Tags</h1>
      <div>{Tags}</div>
    </div>
  )
}

export default TrendingTags
