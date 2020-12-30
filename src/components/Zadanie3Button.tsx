import React from 'react'
import { ButtonText } from './Zadanie3Counter'

type ButtonProps = {
  text: ButtonText,
  handleClick: () => void;
}

export default function Zadanie3Button({ text, handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
