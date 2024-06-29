import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Increment(){
    setCount(count + 1)
  }
  function Decrement(){
    setCount(count - 1)
  }
  function ResetCounter(){
    setCount(0)
  }

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={Increment}>+</button>
        <button onClick={ResetCounter}>Reset</button>
        <button onClick={Decrement}>-</button>
      </div>
    </>
  )
}

export default App
