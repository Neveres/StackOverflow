import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useTags = () => {
  const [tags, setTags] = useState([] as string[])

  useEffect(() => {
    httpClient
      .get('tags', {
        params: { order: 'desc', sort: 'popular', site: 'stackoverflow' },
      })
      .then((response) => {
        setTags(
          response.data.items.slice(0, 10).map((item: IObject) => item.name),
        )
      })
  }, [])

  return { tags }
}
