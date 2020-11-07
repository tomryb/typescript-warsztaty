import React from 'react'
import { ButtonText } from './CounterZadanie3'

type ButtonProps = {
  text: ButtonText,
  handleClick: () => void;
}

export default function ButtonZadanie3({ text, handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
