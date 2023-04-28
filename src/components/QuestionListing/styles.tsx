import { css } from '@emotion/react'

export const questionsContainer = css`
  .question-container {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 10px 20px;
    border-bottom: 1px solid grey;
    margin-bottom: 10px;

    .question-detail {
      font-size: 16px;
      width: 90%;

      .question-title {
      }

      .question-count-container {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        text-align: center;

        .question-count-container-col {
          margin-right: 5px;
        }

        .question-count-header {
          padding-bottom: 5px;
          color: #c11515;
        }

        .question-score.negative {
          color: red;
        }

        .question-answer-count.fulfilled {
          background-color: #1890ff;
        }

        .question-answer-count.pending {
          border: 1px solid #1890ff;
        }
      }

      @media (max-width: 480px) {
        .question-count-container {
          width: 80%;
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

  @media (max-width: 480px) {
    .question-container {
      padding: 0 10px 10px 10px;

      .question-detail {
        margin-right: 5px;
      }
    }
  }
`
