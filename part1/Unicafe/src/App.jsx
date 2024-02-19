import { useState } from 'react'



const Button = ({ Event, text }) => {
  // console.log(`Event is ${Event} and test is ${text}`);
  return (
    <button onClick={Event}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  console.log(`Statistics good : ${good}, bad ${bad}, neutral ${neutral}`);
  const all=good + bad + neutral;
  if(all===0)
    return (
      <div>
          <p>No feedback given</p>
        </div>
      )
  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={(good - bad) / all} />
      <StatisticLine text={"positive"} value={`${(good / all) * 100} %`} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  console.log(`Statistic Line ${text} and value ${value}`);
  return (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    </tbody>
  </table>)

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const incrementValue = (val,setter)=>()=>setter(val+1);
  return (
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={incrementValue(good,setGood)}>Test</button> */}
      <Button text={"good"} Event={() => setGood(good + 1)} />
      <Button text={"neutral"} Event={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} Event={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>


  )
}

export default App