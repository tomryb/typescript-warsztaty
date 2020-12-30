import React, {useState} from 'react'
import Zadanie3Button from './Zadanie3Button'
import { ButtonText } from './Zadanie3Counter'

type Counter2Props = {
  title: string
}

const Zadanie4Counter2 = ({title}: Counter2Props) => {
  const [counter, setCounter] = useState(10)
  return (
    <div>
      <h2>{title}</h2>
      <div>
        Counter: {counter}
        <Zadanie3Button text={ButtonText.Increment} handleClick={() => setCounter(counter + 1)}/>
        <Zadanie3Button text={ButtonText.Decrement} handleClick={() => setCounter(counter - 1)}/>
        <Zadanie3Button text={ButtonText.Reset} handleClick={() => setCounter(0)}/>
      </div>
    </div>
  )
}

export default Zadanie4Counter2;