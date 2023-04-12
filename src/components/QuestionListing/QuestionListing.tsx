/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo } from 'react'
import { useQuestions } from 'src/hooks'
import { AppContext } from 'src/components'
import { questionsContainer } from './styles'

const QuestionListing = () => {
  const {
    state: { selectedTag },
  } = useContext(AppContext)
  const { questions } = useQuestions(selectedTag)

  const Questions = useMemo(
    () =>
      questions.map((question) => (
        <a
          key={`${question.question_id}-${question.creation_date}-${question.last_edit_date}`}
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className="question-container"
        >
          <div className="question-detail">
            <div className="question-title">{question.title}</div>
            <div className="question-count-container">
              <div>
                <div className="question-count-header">Score</div>
                <div
                  className={`question-score ${
                    question.score < 0 ? 'negative' : ''
                  }`}
                >
                  {question.score}
                </div>
              </div>
              <div>
                <div className="question-count-header">Ansers</div>
                <div
                  className={`question-answer-count ${
                    question.answer_count > 1
                      ? question.is_answered
                        ? 'fulfilled'
                        : 'pending'
                      : ''
                  }`}
                >
                  {question.answer_count}
                </div>
              </div>
              <div>
                <div className="question-count-header">Viewed</div>
                <div className="question-view-count">{question.view_count}</div>
              </div>
            </div>
          </div>
          <div className="question-owner">
            <img
              className="question-owner-profile-image"
              src={question.owner.profile_image}
            />
            <div>{question.owner.display_name}</div>
          </div>
        </a>
      )),
    [questions],
  )

  return <div css={questionsContainer}>{Questions}</div>
}

export default QuestionListing
