import React, { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Information = ({score}) => <p>Votes: {score}</p>

const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {anecdote:'If it hurts, do it more often', score:0},
    {anecdote:'Adding manpower to a late software project makes it later!', score:0},
    {anecdote:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', score:0},
    {anecdote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', score:0},
    {anecdote:'Premature optimization is the root of all evil.', score:0},
    {anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', score:0},
    {anecdote:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients', score:0}
  ])

  const randomValue = (setFunction, anecdotes_length) => {
    const rand = Math.floor(Math.random() * anecdotes_length)
    setFunction(rand)
  }

  const incrementVote = (selected, setFunction) => {
    let ret_array = [...anecdotes]
    ret_array[selected].score += 1
    setFunction(ret_array)
  }


  const anecdotes_length = anecdotes.length
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Header header={anecdotes[selected].anecdote} />
      <Information score={anecdotes[selected].score} />
      <Button handleClick={()=>randomValue(setSelected, anecdotes_length)} text={"Next Anecdote"} />
      <Button handleClick={()=>incrementVote(selected, setAnecdotes)} text={"Vote"} />


  </div>
  )
}

export default App
