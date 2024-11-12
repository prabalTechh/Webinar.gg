/* eslint-disable react/display-name */
import  { forwardRef } from 'react';

/* eslint-disable react/prop-types */
const Input = forwardRef(({ value, onChange, placeholder, className }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
});

export default Input;
