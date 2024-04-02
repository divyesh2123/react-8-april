import React from 'react'
import { Formik, Field, Form } from 'formik';

export const LoginWithFormik = () => {
  return (
    <div>

<Formik
      initialValues={{
      
        email: '',
        password:''
      }}
      onSubmit={ (values) => {
    
        console.log(values);
      }}
    >
      <Form>

     
        <Field id="email" name="email" placeholder="Jane" />


       
        <Field type="password" name="password" placeholder="Jane" />


<input type='submit' value="save" />

      </Form>
      
      
        </Formik>

    </div>
  )
}
