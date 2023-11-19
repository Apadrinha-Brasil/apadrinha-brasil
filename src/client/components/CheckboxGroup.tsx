import React from 'react'
import { FieldProps } from 'formik'

interface Option {
  value: string;
  label: string;
}

interface CheckboxGroupProps extends FieldProps {
  label: string;
  options: Option[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ field, form, label, options }) => (
  <div>
    <label>{label}</label>
    {options.map((option) => (
      <div key={option.value}>
        <label>
          <input
            type="checkbox"
            name={field.name}
            value={option.value}
            checked={field.value.includes(option.value)}
            onChange={() => {
              const nextValue = field.value.includes(option.value)
                ? field.value.filter((val: string) => val !== option.value)
                : [...field.value, option.value]
              form.setFieldValue(field.name, nextValue)
            }}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>
)
