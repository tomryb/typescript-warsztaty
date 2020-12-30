import React, { useReducer, FC } from 'react'
import Zadanie3Button from './Zadanie3Button'
import { ButtonText } from './Zadanie3Counter'

type Counter2Props = {
  title: string
}

type InitialState = {
  count: number;
}

export enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

type CounterAction = {
  type: CounterActionType;
}

const initialState: InitialState = {
  count: 10,
}

function counterReducer(state: InitialState, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { count: state.count + 1 }

    case CounterActionType.DECREMENT:
      return { count: state.count - 1 }

    case CounterActionType.RESET:
      return { count: 0 }
    default:
      return state
  }
}

const Zadanie5Counter2: FC<Counter2Props> = ({ title }: Counter2Props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        Counter: {state.count}
        <Zadanie3Button text={ButtonText.Increment} handleClick={() => dispatch({ type: CounterActionType.INCREMENT })} />
        <Zadanie3Button text={ButtonText.Decrement} handleClick={() => dispatch({ type: CounterActionType.DECREMENT })} />
        <Zadanie3Button text={ButtonText.Reset} handleClick={() => dispatch({ type: CounterActionType.RESET })} />
      </div>
    </div>
  )
}

export default Zadanie5Counter2;