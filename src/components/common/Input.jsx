// /src/components/Input.jsx
import React from 'react'

const Input = ({ id, type, register, errors, className }) => {
  return (
    <>
      <input type={type} id={id} {...register(id)} className={className || "border"} />
      {errors && <div className='text-sm text-red-700'>{errors.message}</div>}
    </>
  );
}


export default Input