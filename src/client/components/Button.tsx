import React from 'react'

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ type, label }) => (
  <button type={type}>{label}</button>
)

