import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import Accounts from './Accounts'
import { Login } from './Login'
import LoginPage from './LoginPage'

export default function ApplicationRoute() {
  return (
    <>
    <Link  to="/account">Navigate</Link>
    <Routes>

        <Route path='/account' element={<Accounts></Accounts>}/>
        <Route path='/' element={<LoginPage></LoginPage>}/>
    </Routes>
    </>
  )
}
