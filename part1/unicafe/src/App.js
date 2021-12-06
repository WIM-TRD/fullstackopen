import React, { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Statistics = ({text, value}) => <p>{text} : {value}</p>

const Button = ({ handleClick, text }) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const header_welcome = "Please provide feedback for Unicafe."
  const header_statistics = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(10)
  const incrementValue = (value, setFunction) => {
    setFunction(value+1)
  }
  const calculateAverageScore = (good, neutral, bad) => {
     let ret_val = ((good-bad)/(good+neutral+bad))
     if (isNaN(ret_val)) {
       ret_val = 0
     }
     return ret_val
  }
  const calculatePositiveFeedback = (good, neutral, bad) => {
     let ret_val = (good)/(neutral + bad + good)

     if (isNaN(ret_val)) {
       ret_val = 0
     }
     return (ret_val*100) + "%"
  }
  const _good = "Good"
  const _neutral = "Neutral"
  const _bad = "Bad"

  return (
    <div>
      <Header title = {header_welcome} />
      <Button handleClick={()=>incrementValue(good, setGood)} text={_good} />
      <Button handleClick={()=>incrementValue(neutral, setNeutral)} text={_neutral} />
      <Button handleClick={()=>incrementValue(bad, setBad)} text={_bad} />

      <Header title = {header_statistics} />
      <Statistics text={_good} value={good} />
      <Statistics text={_neutral} value={neutral} />
      <Statistics text={_bad} value={bad} />
      <Statistics text={"All"} value={good+neutral+bad} />
      <Statistics text={"Average"} value={calculateAverageScore(good,neutral,bad)} />
      <Statistics text={"Positive"} value={calculatePositiveFeedback(good,neutral,bad)} />


    </div>
  )
}

export default App
