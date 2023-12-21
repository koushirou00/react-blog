import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type TextareaProps = React.ComponentProps<'textarea'> & {
  error?: FieldError;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({...props}, ref) => {
  return (
    <>
      <textarea
        ref={ref}
        {...props}
        rows={8}
      />
      {props.error && <div className='text-sm text-red-700'>{props.error.message}</div>}
    </>
  );
});

export default Textarea;
