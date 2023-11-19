import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Input } from '.'

export const MainForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        selecionarOpcao: '',
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

        <label htmlFor="selecionarOpcao">Incrível Select:</label>
        <Field
          as="select"
          id="selecionarOpcao"
          name="selecionarOpcao"
        >
          <option value="" label="Selecione..." />
          <option value="opcao1" label="Opção 1" />
          <option value="opcao2" label="Opção 2" />
          <option value="opcao3" label="Opção 3" />
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
