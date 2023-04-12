import { css } from '@emotion/react'

export const trendingTagsContainer = css`
  padding-bottom: 20px;

  .tagContainer {
    display: inline-block;
    margin: 0 10px 15px 0;
    border-radius: 10px;
    border: 1px solid white;
    padding: 10px 20px;
    cursor: pointer;
  }

  .selected {
    background-color: blue;
  }
`
