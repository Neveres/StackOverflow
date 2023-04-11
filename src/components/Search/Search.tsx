import React, { useState, useCallback } from 'react'
import { Input } from 'antd'

const Search = () => {
  const [value, setValue] = useState('')

  const onSearch = (value: string) => {
    console.log(value)
  }

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <Input.Search
      value={value}
      placeholder="Input search tags"
      allowClear
      enterButton="Search"
      size="large"
      onChange={onChange}
      onSearch={onSearch}
    />
  )
}

export default Search
