import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useQuestions = (selectedTag: string, page: number) => {
  const [questions, setQuestions] = useState([] as IObject[])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (selectedTag) {
      httpClient
        .get('questions', {
          params: {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow',
            pagesize: 20,
            page,
            tagged: selectedTag,
          },
        })
        .then((response) => {
          const {
            data: { items, has_more },
          } = response
          if (!has_more) {
            setHasMore(false)
          }
          if (page === 1) {
            setQuestions(items)
          } else {
            setQuestions([...questions, ...items])
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selectedTag])

  return { questions, hasMore }
}
