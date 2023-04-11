import React, { useContext, useMemo } from 'react'
import { useQuestions } from 'src/hooks'
import { AppContext } from 'src/components'

const QuestionListing = () => {
  const {
    state: { selectedTag },
  } = useContext(AppContext)
  const { questions } = useQuestions(selectedTag)

  const Questions = useMemo(
    () =>
      questions.map((question) => (
        <div key={question.link}>
          <div>
            <div className="question-title">{question.title}</div>
            <div>
              <div className="question-score"></div>
              <div className="question-answers"></div>
              <div className="question-viewed"></div>
            </div>
          </div>
          <img className="question-avatar" src="" />
        </div>
      )),
    [questions],
  )

  return (
    <div>
      <div>{Questions}</div>
    </div>
  )
}

export default QuestionListing
