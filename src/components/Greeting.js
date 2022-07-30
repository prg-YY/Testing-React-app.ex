import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
  const [changeText, setChangeText] = useState(false)

  const textChangeHandler = () => {
    setChangeText(true)
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  )
}

export default Greeting
