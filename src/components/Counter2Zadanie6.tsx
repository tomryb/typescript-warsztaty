import React, { useReducer, FC, useState } from 'react'

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

const Counter2Zadanie6: FC<Counter2Props> = ({ title }: Counter2Props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [formValue, setFormValue] = useState(state.count)

  const handleChange = (e: React.ChangeEvent) => {
    setFormValue(Number((e.target as HTMLInputElement).value))
  }
  return (
    <div>
      <form>
        <label>Podaj wartość</label>
        <input type="text" value={formValue} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Counter2Zadanie6;