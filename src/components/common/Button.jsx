// /src/components/common/Button.jsx
import React from 'react'

const Button = ({ label, type, className, onClick }) => {
  return (
    <button type={type} className={className || "bg-stone-300 py-2 px-4 rounded-lg font-bold"} onClick={onClick} >
      {label}
    </button >
  )
}

export default Button