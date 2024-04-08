import React from 'react'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export const FormikWithMUI = () => {

    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            jobtype: ""
        },
        validationSchema :validationSchema ,
        onSubmit: (values) => {
           console.log(values);
          },
    })
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
        <Select
          name ="jobtype"
          id="jobtype"
          labelId="demo-simple-select-label"
         
          value={formik.values.jobtype}
          label="Job Type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        >
          <MenuItem value="fullTime">Full Time</MenuItem>
          <MenuItem value="partTime">Part Time</MenuItem>
         
        </Select>
      </FormControl>

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  </div>
  )
}
