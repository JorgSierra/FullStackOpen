import { useState } from 'react'

const History = ({ allClicks }) => {
  const total = allClicks.length;
  if (total === 0) {
    return (
      <p>
        the app is used by pressing the buttons
      </p>
    )
  }
  return (
    <div>
      <p>button press history: {allClicks.join(' ')}</p>
      <p>total clicks: {total}</p>
    </div>
  )
} 

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App