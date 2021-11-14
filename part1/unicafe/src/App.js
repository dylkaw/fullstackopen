import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <table>
      <StatisticLine text='good' value ={props.good} />
      <StatisticLine text='neutral' value ={props.neutral} />
      <StatisticLine text='bad' value ={props.bad} />
      <StatisticLine text='all' value ={props.all} />
      <StatisticLine text='average' value ={props.avg} />
      <StatisticLine text='positive' value ={props.positive} />
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = (good, neutral, bad) => (good + neutral + bad)
  const avg = (good, neutral, bad) => {
    const score = good - bad
    return score / all(good, neutral, bad)
  }
  const positive = (good, neutral, bad) => ((good/all(good, neutral, bad)*100 + ' %'))

  const setToValue = (value, func) => {
    func(value + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(good, setGood)} text='good'/>
      <Button handleClick={() => setToValue(neutral, setNeutral)} text='neutral'/>
      <Button handleClick={() => setToValue(bad, setBad)} text='bad'/> 
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all(good,neutral,bad)} avg={avg(good,neutral,bad)} positive={positive(good,neutral,bad)} />
    </div>
  )
}

export default App;
