import React from 'react'

const Label = ({ ...props }) => {
  return (
    <label {...props} >{props.text}</label>
  )
}

export default Label