// /src/components/Input.jsx
import React, { forwardRef } from 'react'

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <>
      <input {...props} ref={ref} />
      {props.error && <div className='text-sm text-red-700'>{props.error.message}</div>}
    </>
  );
})


export default Input