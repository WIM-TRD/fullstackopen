import React, { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Information = ({text, value}) => <p>{text} : {value}</p>

const Button = ({ handleClick, text }) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) =>{
    const calculateAverageScore = (good, bad, total) => {
       let ret_val = ((good-bad)/(total))
       if (isNaN(ret_val)) {
         ret_val = 0
       }
       return ret_val
    }

    const calculatePositiveFeedback = (good,total) => {
       let ret_val = (good)/(total)

       if (isNaN(ret_val)) {
         ret_val = 0
       }
       return (ret_val*100) + "%"
    }

  const total = (good+neutral+bad)
  return(
      <div>
      <Information text={"Good"} value={good} />
      <Information text={"Neutral"} value={neutral} />
      <Information text={"Bad"} value={bad} />
      <Information text={"All"} value={total} />
      <Information text={"Average"} value={calculateAverageScore(good,bad, total)} />
      <Information text={"Positive"} value={calculatePositiveFeedback(good,total)} />
      </div>
)
}
const App = () => {
  const header_welcome = "Please provide feedback for Unicafe."
  const header_statistics = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementValue = (value, setFunction) => {
    setFunction(value+1)
  }

  return (
    <div>
      <Header title = {header_welcome} />
      <Button handleClick={()=>incrementValue(good, setGood)} text={"Good"} />
      <Button handleClick={()=>incrementValue(neutral, setNeutral)} text={"Neutral"} />
      <Button handleClick={()=>incrementValue(bad, setBad)} text={"Bad"} />

      <Header title = {header_statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
