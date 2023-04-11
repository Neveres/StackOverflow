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
      }

      .ant-layout-content {
        padding: 0 50px;
      }
    `}
  />
)

export const colors = {
  bgPrimary: '#181818',
  textWhite: '#ffffff',
}
