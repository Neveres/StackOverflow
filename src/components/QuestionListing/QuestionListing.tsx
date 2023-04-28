/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuestions } from 'src/hooks'
import { AppContext, Spinner } from 'src/components'
import { questionsContainer } from './styles'

const THRESHOLD_OF_SCORE = 0
const THRESHOLD_OF_ANSWER_COUNT = 1

const QuestionListing = () => {
  const {
    state: { selectedTag, page },
    actions: { setPage },
  } = useContext(AppContext)

  const { questions, hasMore } = useQuestions(selectedTag, page)

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
              <div className="question-count-container-col">
                <div className="question-count-header">Score</div>
                <div
                  className={`question-score ${
                    question.score < THRESHOLD_OF_SCORE ? 'negative' : ''
                  }`}
                >
                  {question.score}
                </div>
              </div>
              <div className="question-count-container-col">
                <div className="question-count-header">Answers</div>
                <div
                  className={`question-answer-count ${
                    question.answer_count >= THRESHOLD_OF_ANSWER_COUNT
                      ? question.is_answered
                        ? 'fulfilled'
                        : 'pending'
                      : ''
                  }`}
                >
                  {question.answer_count}
                </div>
              </div>
              <div className="question-count-container-col">
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

  const fetchMoreQuestions = useCallback(() => {
    if (hasMore) {
      setPage(page + 1)
    }
  }, [hasMore, page, setPage])

  return (
    <InfiniteScroll
      css={questionsContainer}
      dataLength={questions.length}
      next={fetchMoreQuestions}
      hasMore={hasMore}
      loader={<Spinner />}
    >
      {Questions}
    </InfiniteScroll>
  )
}

export default QuestionListing
