/** @jsxImportSource @emotion/react */
import React, { useCallback, useContext } from 'react'
import { Input } from 'antd'
import { AppContext } from 'src/components'
import { searchContainer } from './styles'

const Search = () => {
  const {
    state: { searchTag },
    actions: { setSearchTag },
  } = useContext(AppContext)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTag(event.target.value)
    },
    [setSearchTag],
  )

  return (
    <Input.Search
      css={searchContainer}
      value={searchTag}
      placeholder="Input search tag"
      allowClear
      enterButton="Search"
      size="large"
      onChange={onChange}
    />
  )
}

export default Search
