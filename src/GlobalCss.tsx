import React from 'react'
import { css, Global } from '@emotion/react'

const MIN_HEIGHT_OF_HEADER = '228px'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        color: ${colors.textWhite} !important;
      }

      body {
        margin: 0;
        background-color: ${colors.bgPrimary};
      }

      .ant-layout-header {
        height: auto;
        position: fixed;
        top: 0;
        width: 100%;
        min-height: ${MIN_HEIGHT_OF_HEADER};
      }

      .ant-layout-content {
        padding: 0 50px;
        margin-top: ${MIN_HEIGHT_OF_HEADER};
      }
    `}
  />
)

export const colors = {
  bgPrimary: '#181818',
  textWhite: '#ffffff',
}
