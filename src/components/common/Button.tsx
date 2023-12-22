// /src/components/common/Button.jsx
import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props}>
      {props.text}
    </button>
  )
};

export default Button;
