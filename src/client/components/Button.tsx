import React from 'react'

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ type='button', label }) => (
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type={type}>{label}</button>
)
