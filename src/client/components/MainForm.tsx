import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Select, CheckboxGroup, RadioGroup, Button } from '.'
import * as yup from 'yup'

export const MainForm = () => {
  const [emailFocus, setEmailFocus] = useState(false)
  const [selectFocus, setSelectFocus] = useState(false)
  const [checkboxFocus, setCheckboxFocus] = useState(false)
  const [radioFocus, setRadioFocus] = useState(false)

  const validationSchema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    selectOption: yup.string().required('O campo é obrigatório'),
    checkboxes: yup.array().min(1, 'Selecione pelo menos uma opção').required('Escolha pelo menos uma opção'),
    radioOption: yup.string().required('Escolha uma opção'),
  })

  const optionsSelect = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ]

  const optionsCheckbox = [
    { value: 'checkbox1', label: 'Checkbox 1' },
    { value: 'checkbox2', label: 'Checkbox 2' },
    { value: 'checkbox3', label: 'Checkbox 3' },
  ]

  const optionsRadio = [
    { value: 'radio1', label: 'Radio 1' },
    { value: 'radio2', label: 'Radio 2' },
    { value: 'radio3', label: 'Radio 3' }
  ]

  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={{
          email: '',
          selectOption: '',
          checkboxes: [],
          radioOption: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={validationSchema}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Endereço de Email:
          </label>
          <Field
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-1/2 ${
              emailFocus ? 'focus:border-blue-500 focus:ring-blue-500' : ''
            }`}
            type="email"
            id="email"
            name="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <ErrorMessage className="error text-red-700" name="email" component="div" />

          <div className="w-full px-3 mb-6 md:mb-0 border-black">
            <Field
              name="selectOption"
              label="Incrível Select:"
              options={optionsSelect}
              component={Select}
              className={`peer p-4 pe-9 block w-full border-black rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 ${
                selectFocus ? 'focus:pt-6 focus:pb-2' : ''
              }`}
              onFocus={() => setSelectFocus(true)}
              onBlur={() => setSelectFocus(false)}
            />
            <ErrorMessage className="error text-red-700" name="selectOption" component="div" />
          </div>

          <Field
            name="checkboxes"
            label="Escolha as opções:"
            options={optionsCheckbox}
            component={CheckboxGroup}
            className={`mt-4 ${checkboxFocus ? 'focus' : ''}`}
            onFocus={() => setCheckboxFocus(true)}
            onBlur={() => setCheckboxFocus(false)}
          />
          <ErrorMessage className="error text-red-700" name="checkboxes" component="div" />

          <Field
            name="radioOption"
            label="Escolha uma opção:"
            options={optionsRadio}
            component={RadioGroup}
            className={`mt-4 ${radioFocus ? 'focus' : ''}`}
            onFocus={() => setRadioFocus(true)}
            onBlur={() => setRadioFocus(false)}
          />
          <ErrorMessage className="error text-red-700" name="radioOption" component="div" />

          <Button type="submit" label="Submit" />
        </Form>
      </Formik>
    </div>
  )
}
