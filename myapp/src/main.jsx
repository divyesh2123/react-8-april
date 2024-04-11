import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { Counter } from './Counter.jsx'
import { DisplayData } from './DisplayData.jsx'
import { DisplayDataWithAPI } from './DisplayDataWithAPI.jsx'
import BirthDateDisplay from './BirthDateDisplay.jsx'
import APIData from './APIData.jsx'
import { Login } from './Login.jsx'
import { DisplayDataWithAxios } from './DisplayDataWithAxios.jsx'
import { LoginWithFormik } from './LoginWithFormik.jsx'
import { MyForm } from './MyForm.jsx'
import { MyFormWithoutYup } from './MyFormWithoutYup.jsx'
import { FormikWithMUI } from './FormikWithMUI.jsx'
import ExampleWithSelect from './ExampleWithSelect.jsx'
import { EmployeeDisplay } from './EmployeeDisplay.jsx'
import DisplayDataWithAPIProps from './DisplayDataWithAPIProps.jsx'
import {BrowserRouter} from 'react-router-dom'
import ApplicationRoute from './ApplicationRoute.jsx'
import Product from './Product.jsx'
import Parent from './Parent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Parent/>
    
    </BrowserRouter>
  
  </React.StrictMode>,
)
