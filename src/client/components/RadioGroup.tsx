import React from 'react'
import { FieldProps } from 'formik'

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps extends FieldProps {
  label: string;
  options: Option[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ field, label, options }) => (
  <div>
    <label>{label}</label>
    {options.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="radio"
            name={field.name}
            value={option.value}
            checked={field.value === option.value}
            onChange={() => field.onChange({ target: { value: option.value, name: field.name, type: 'radio' } })}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>
)
