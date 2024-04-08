import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
export default function ExampleWithSelect() {
   
  return (
    <div>

    <Formik
          initialValues={{
          
            firstName : "",
        lastName : "",
        jobType: ""
          }}
          onSubmit={ (values) => {
        
            console.log(values);
          }}
        >
          <Form>
    
         
            <Field id="firstName" name="firstName" placeholder="firstName" />
    
            <Field id="lastName" name="lastName" placeholder="lastName" />
    
           
            <Field name="jobType" as="select" >
            <option value="" disabled={true}></option>
   <option value="parttime">Part-Time</option>
   <option value="fulltime">Full-Time</option>
  
 </Field>
    
    
    <input type='submit' value="save" />
    
          </Form>
          
          
            </Formik>
    
        </div>
  )
}
