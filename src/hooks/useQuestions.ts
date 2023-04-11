import { useState, useEffect, useCallback } from 'react'
import { httpClient } from 'src/libraries'

export const useQuestions = () => {
  const [questions, setQuestions] = useState([] as IObject[])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const increasePage = useCallback(() => {
    if (hasMore) {
      setPage(page + 1)
    }
  }, [hasMore, page])

  useEffect(() => {
    httpClient
      .get('questions', {
        params: {
          order: 'desc',
          sort: 'activity',
          site: 'stackoverflow',
          pagesize: 20,
          page,
        },
      })
      .then((response) => {
        const {
          data: { items, has_more },
        } = response

        if (has_more) {
          setQuestions([...questions, ...items])
        } else {
          setHasMore(false)
        }
      })
  }, [page])

  return { questions }
}
