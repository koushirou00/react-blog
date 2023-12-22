import React from 'react'

type LabelProps = {
  htmlFor: string;
  className?: string;
  text: string;
}

const Label: React.FC<LabelProps> = (props) => {
  return (
    <label {...props} >{props.text}</label>
  )
}

export default Label