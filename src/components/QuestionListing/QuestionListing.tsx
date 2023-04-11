import React, { useMemo } from 'react'
import { useQuestions } from 'src/hooks'

const QuestionListing = () => {
  const { questions } = useQuestions()

  const Questions = useMemo(
    () =>
      questions.map((question) => (
        <div key={question.link}>{question.title}</div>
      )),
    [questions],
  )

  return (
    <div>
      <span>QuestionListing</span>
      <div>{Questions}</div>
    </div>
  )
}

export default QuestionListing
