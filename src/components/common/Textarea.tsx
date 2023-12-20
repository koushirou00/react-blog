// /src/components/Textarea.jsx
import React, { forwardRef } from 'react';
import { TextareaProps } from 'types/commonTypes';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  id,
  onChange,
  onBlur,
  error,
  className
}, ref) => {
  return (
    <>
      <textarea
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        className={className}
        rows={8}
      />
      {error && <div className='text-sm text-red-700'>{error.message}</div>}
    </>
  );
});

export default Textarea;
