import { useContext } from "react"
import { CounterContext } from "./Parent"

const FavChild = () => {
  const ctx = useContext(CounterContext)
  
  return (
    <div>
        <button onClick={ctx.increase}>Kedvenc gyerek ❤</button>
    </div>
  )
}

export default FavChild