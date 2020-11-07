import React, { useReducer, FC } from 'react'
import ButtonZadanie3 from './ButtonZadanie3'
import { ButtonText } from './CounterZadanie3'

type Counter2Props = {
  title: string
}

type InitialState = {
  count: number;
}

enum CounterActionType {
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

const Counter2Zadanie5: FC<Counter2Props> = ({ title }: Counter2Props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        Counter: {state.count}
        <ButtonZadanie3 text={ButtonText.Increment} handleClick={() => dispatch({ type: CounterActionType.INCREMENT })} />
      </div>
    </div>
  )
}

export default Counter2Zadanie5;