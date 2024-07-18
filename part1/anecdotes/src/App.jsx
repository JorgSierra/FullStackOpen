import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const size = anecdotes.length;
  // Declare array of size with 0's 
  const emptyVotes = new Array(size + 1).join('0').split('').map(parseFloat);

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const [selected, setSelected] = useState(getRandomInt(size));
  const [votes, setVotes] = useState(emptyVotes);

  const handleNext = () => setSelected(getRandomInt(size));
  const handleVote = () => {
    const copy = [ ...votes ];
    copy[selected] += 1;
    setVotes(copy);
  }
  const getMaxIndex = () => {
    let index = 0;
    for(let i = 1; i < size; i++){
      if(votes[i] > votes[index]){
        index = i;
      }
    }
    return index;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={ handleNext }>next anecdote</button>
      <button onClick={ handleVote }>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMaxIndex()]}</p>
    </div>
  )
}

export default App