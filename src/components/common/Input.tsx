import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = React.ComponentProps<'input'> &{
  error?: FieldError;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({...props}, ref ) => {
  return (
    <>
      <input 
        {...props}
        ref={ref}
      />
      {props.error && <div className='text-sm text-red-700'>{props.error.message}</div>}
    </>
  );
});

export default Input;

