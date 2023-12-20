import React, { forwardRef } from 'react';
import { InputProps } from 'types/commonTypes';


const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  id,
  type, 
  error, 
  className, 
  onBlur, 
  onChange 
}, ref) => {
  return (
    <>
      <input 
        type={type} 
        id={id} 
        ref={ref} 
        className={className} 
        onChange={onChange} 
        onBlur={onBlur}/>
      {error && <div className='text-sm text-red-700'>{error.message}</div>}
    </>
  );
});

export default Input;
