import React from 'react'
import { useFormik } from 'formik'
import { Input } from '.'


export const MainForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <Input name="email" type="email" value={formik.values.email} handleChange={formik.handleChange}/>
      <button type="submit">Submit</button>
    </form>
  )
}
