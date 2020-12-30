import React, { useReducer, FC, useState } from 'react'
import { Zadanie6Form, counterReducer, initialState } from './Zadanie6Form.reducer'


const Zadanie6Counter2: FC<Zadanie6Form> = ({ title }: Zadanie6Form) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [formValue, setFormValue] = useState(state.count)

  const handleChange = (e: React.ChangeEvent) => {
    setFormValue(Number((e.target as HTMLInputElement).value))
  }
  return (
    <div>
      <form>
        <label><h1>{title}</h1></label>
        <input type="text" value={formValue} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Zadanie6Counter2;