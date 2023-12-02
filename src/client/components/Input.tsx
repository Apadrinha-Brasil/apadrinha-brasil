import { ErrorMessage } from 'formik';
import React, { ChangeEvent } from 'react'


type InputTypes = 'text' | 'number' | 'password' | 'email';

interface InputProps {
  name: string;
  type: InputTypes;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  _placeHolder?: string;
}

export const Input: React.FC<InputProps> = ({ name, type, value, handleChange, _placeHolder = '' }) => {

  return (
    <div>
      <input
        name={name}
        placeholder={_placeHolder}
        type={type}
        onChange={handleChange}
        value={value}
      />
      <ErrorMessage className='error text-red-700' name={name} component="div" />
    </div>
  )
}

export default Input
