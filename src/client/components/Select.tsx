import React, { SelectHTMLAttributes } from 'react'

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  };
  label: string;
  options: Option[];
}

export const Select: React.FC<SelectProps> = ({ field, label, options, ...props }: SelectProps) => (
  <div>
    <label htmlFor={field.name}>{label}</label>
    <select id={field.name} {...field} {...props}>
      <option value="" label="Selecione..." />
      {options.map(option => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  </div>
)
