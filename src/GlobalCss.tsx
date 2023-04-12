import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        color: ${colors.textWhite};
      }

      body {
        margin: 0;
        background-color: ${colors.bgPrimary};

        h1 {
          color: ${colors.textWhite};
        }
      }

      .ant-layout-header {
        height: auto;
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0 80px;
      }

      .ant-layout-content {
        padding: 80px;
      }
    `}
  />
)

export const colors = {
  bgPrimary: '#181818',
  textWhite: '#ffffff',
}
