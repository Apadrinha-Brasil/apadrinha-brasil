import React, { ChangeEvent } from 'react'

type InputTypes = 'text' | 'number' | 'password' | 'email';

interface InputProps {
  type: InputTypes;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  _placeHolder?: string;
}

export const Input: React.FC<InputProps> = ({ type, value, handleChange, _placeHolder = '' }) => {
  return (
    <input
      placeholder={_placeHolder}
      type={type}
      onChange={handleChange}
      value={value}
    />
  )
}
