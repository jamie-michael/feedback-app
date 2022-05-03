import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../components/context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average ? average : '0'}</h4>
    </div>
  )
}


export default FeedbackStats
