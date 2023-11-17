import React from 'react'
import { useFormik } from 'formik'
import { Input } from '.'

export const MainForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      selecionarOpcao: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Endereço de Email:</label>
      <Input name="email" type="email" value={formik.values.email} handleChange={formik.handleChange} />
      
      <label htmlFor="selecionarOpcao">Incrível Select:</label>
      <select
        id="selecionarOpcao"
        name="selecionarOpcao"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.selecionarOpcao}
      >
        <option value="" label="Selecione..." />
        <option value="opcao1" label="Opção 1" />
        <option value="opcao2" label="Opção 2" />
        <option value="opcao3" label="Opção 3" />
      </select>
      
      <button type="submit">Submit</button>
    </form>
  )
}
