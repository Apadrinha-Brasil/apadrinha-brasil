import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Select } from '.'

export const MainForm = () => {
  const optionsSelect = [
    { value: '', label: 'Selecione...' },
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ]

  return (
    <Formik
      initialValues={{
        email: '',
        selectOption: '',
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default MainForm
