// /src/components/Textarea.jsx
import React, { forwardRef } from 'react'


const Textarea = forwardRef(({ ...props }, ref) => {
  return (
    <>
      <textarea {...props} ref={ref} rows={8} />
      {props.error && <div className='text-sm text-red-700'>{props.error.message}</div>}
    </>
  )
});

export default Textarea