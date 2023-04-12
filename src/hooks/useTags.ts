import { useState, useEffect, useMemo } from 'react'
import { httpClient, debounce } from 'src/libraries'
import { DISPLAY_AMOUNT } from 'src/settings'

export const useTags = (searchTag: string) => {
  const [tags, setTags] = useState([] as string[])

  const debouncedFetchTags = useMemo(
    () =>
      debounce((searchTag: string) => {
        httpClient
          .get('tags', {
            params: {
              order: 'desc',
              sort: 'popular',
              site: 'stackoverflow',
              inname: searchTag || undefined,
            },
          })
          .then((response) => {
            setTags(
              response.data.items
                .slice(0, DISPLAY_AMOUNT)
                .map((item: IObject) => item.name),
            )
          })
      }, 1000),
    [],
  )

  useEffect(() => {
    debouncedFetchTags(searchTag)
  }, [debouncedFetchTags, searchTag])

  return { tags }
}
