import React, { useState } from 'react'

const Button = ({text, clickHandler}) => 
  (<button onClick={clickHandler}>{text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const generaterandom = (numAnecdotes) => {
    const randomNumber = Math.floor(Math.random() * numAnecdotes)
    setSelected(randomNumber)
  }
  const addvote = (votes) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const most = (votes) => {
    let max = votes[0]
    let maxIndex = 0

    for (let i=1; i<votes.length; i++) {
      if(votes[i] > max) {
        maxIndex = i
        max = votes[i]
      }
    }
    return maxIndex
    }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button text='vote' clickHandler={()=>addvote(votes)}/>
      <Button text='next anecdote' clickHandler={()=>generaterandom(anecdotes.length)}/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[most(votes)]}</div>
    </div>
  )
}

export default App