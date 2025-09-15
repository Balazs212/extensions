import { createContext, useState } from "react"
import Child from "./Child"
import FavChild from "./FavChild"

export const CounterContext = createContext<{increase: ()=>void}>({increase: ()=>{}})

const Parent = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    // setCounter(counter + 1) // hell nah
    setCounter(prev => prev + 1) // hell yeah
  }

  return (
    <div>
        <h1>{counter}</h1>
        {/* <button onClick={increaseCounter}>+</button> */}
        <Child increaseCounter={increaseCounter}/>

        <CounterContext.Provider value={{increase: increaseCounter}}>
          <FavChild />
        </CounterContext.Provider>
    </div>
  )
}

export default Parent