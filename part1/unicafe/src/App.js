import React, { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const StatisticLine = ({text, value}) => <tr><th>{text}</th><th>{value}</th></tr>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


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
  let information = <p>No Feedback Given (yet ...)</p>
  const total = (good+neutral+bad)
  if (total !== 0){
    information =
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={total} />
          <StatisticLine text={"Average"} value={calculateAverageScore(good,bad, total)} />
          <StatisticLine text={"Positive"} value={calculatePositiveFeedback(good,total)} />
        </tbody>
      </table>

  }

  return(information)
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
