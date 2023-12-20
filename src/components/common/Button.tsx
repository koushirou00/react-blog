// /src/components/common/Button.jsx
import React from 'react'
import { ButtonProps } from 'types/commonTypes';

const Button = ({ text, type, className, onClick }: ButtonProps) => {
  return (
    <button type={type} className={className || "bg-stone-300 py-2 px-4 rounded-lg font-bold"} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
