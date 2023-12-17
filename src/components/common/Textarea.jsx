// /src/components/Textarea.jsx
import React from 'react'

const Textarea = ({ id, register, errors }) => {
  return (
    <>
      <textarea id={id} {...register(id)} rows={8} className="w-full border border-gray-300 rounded-lg p-4" />
      {errors && <div className='text-sm text-red-700'>{errors.message}</div>}
    </>
  )
}

export default Textarea