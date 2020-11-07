import React, {useState} from 'react'
import ButtonZadanie3 from './ButtonZadanie3'
import { ButtonText } from './CounterZadanie3'

type Counter2Props = {
  title: string
}

const Counter2Zadanie4 = ({title}: Counter2Props) => {
  const [counter, setCounter] = useState(10)
  return (
    <div>
      <h2>{title}</h2>
      <div>
        Counter: {counter}
        <ButtonZadanie3 text={ButtonText.Increment} handleClick={() => setCounter(counter + 1)}/>
      </div>
    </div>
  )
}

export default Counter2Zadanie4;