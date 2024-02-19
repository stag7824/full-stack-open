import { useState } from 'react'



const Button = ({Event, text})=> {
  console.log(`Event is ${Event} and test is ${text}`);
  return(
    <button onClick={Event}>{text}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button text={"good"} Event={()=>setGood(good+1)}/>
        <Button text={"neutral"} Event={()=>setNeutral(neutral+1)}/>
        <Button text={"bad"} Event={()=>setBad(bad+1)}/>

      <h1>statistics</h1>
      <p>good &nbsp; {good}</p>
      <p>neutral &nbsp; {neutral}</p>
      <p>bad &nbsp; {bad}</p>

    </div>


  )
}

export default App