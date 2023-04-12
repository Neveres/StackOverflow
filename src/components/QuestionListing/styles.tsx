import { css } from '@emotion/react'

export const questionsContainer = css`
  .question-container {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 10px 20px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;

    .question-detail {
      font-size: 16px;
      width: 90%;

      .question-title {
      }

      .question-count-container {
        width: 45%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        text-align: center;

        .question-count-header {
          color: #c11515;
        }

        .question-score.negative {
          color: red;
        }

        .question-answer-count.fulfilled {
          background-color: green;
        }

        .question-answer-count.pending {
          border: 1px solid green;
        }
      }
    }

    .question-owner {
      width: 80px;
      text-align: center;

      .question-owner-profile-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
  }
`
