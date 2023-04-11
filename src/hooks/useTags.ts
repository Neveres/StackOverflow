import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'
import { DISPLAY_AMOUNT } from 'src/settings'

export const useTags = () => {
  const [tags, setTags] = useState([] as string[])

  useEffect(() => {
    httpClient
      .get('tags', {
        params: { order: 'desc', sort: 'popular', site: 'stackoverflow' },
      })
      .then((response) => {
        setTags(
          response.data.items
            .slice(0, DISPLAY_AMOUNT)
            .map((item: IObject) => item.name),
        )
      })
  }, [])

  return { tags }
}
