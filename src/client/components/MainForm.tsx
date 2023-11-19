import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Select, CheckboxGroup } from '.'

export const MainForm = () => {
  const optionsSelect = [
    { value: '', label: 'Selecione...' },
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ]

  const optionsCheckbox = [
    { value: 'checkbox1', label: 'Checkbox 1' },
    { value: 'checkbox2', label: 'Checkbox 2' },
    { value: 'checkbox3', label: 'Checkbox 3' },
  ]

  return (
    <Formik
      initialValues={{
        email: '',
        selectOption: '',
        checkboxes: [],
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <label htmlFor="email">Endereço de Email:</label>
        <Field
          type="email"
          id="email"
          name="email"
          component={Input}
        />

        <Field
          name="selectOption"
          label="Incrível Select:"
          options={optionsSelect}
          component={Select}
        />

        <Field
          name="checkboxes"
          label="Escolha as opções:"
          options={optionsCheckbox}
          component={CheckboxGroup}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}


