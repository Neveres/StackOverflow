/** @jsxImportSource @emotion/react */
import React from 'react'
import { Spin } from 'antd'
import { spinnerContainer } from './styles'

const Spinner = () => (
  <div css={spinnerContainer}>
    <Spin size="large" />
  </div>
)

export default Spinner
