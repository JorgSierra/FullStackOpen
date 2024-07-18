import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={ handleGoodClick } text='good' />
      <Button handleClick={ handleNeutralClick } text='neutral' />
      <Button handleClick={ handleBadClick } text='bad' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App