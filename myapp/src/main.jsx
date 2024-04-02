import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Counter } from './Counter.jsx'
import { DisplayData } from './DisplayData.jsx'
import { DisplayDataWithAPI } from './DisplayDataWithAPI.jsx'
import BirthDateDisplay from './BirthDateDisplay.jsx'
import APIData from './APIData.jsx'
import { Login } from './Login.jsx'
import { DisplayDataWithAxios } from './DisplayDataWithAxios.jsx'
import { LoginWithFormik } from './LoginWithFormik.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginWithFormik />
  </React.StrictMode>,
)
