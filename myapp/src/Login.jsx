import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate}  from 'react-router-dom'

export const Login = () => {

    const n = useNavigate();

    
    const [data,setData] = useState({
        email : "",
        password : ""
    })

    const handleInput = (e)=>{

        setData({...data, [e.target.name]: e.target.value})
    }

   
    const handleSubmit = (e)=>{

        
        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        .then(y=>{
            localStorage.setItem("token",JSON.stringify(y.data))
        }).then(y=>{

            n("/account");
        })

        e.preventDefault();

        console.log(data);

    }
  return (
    <form onSubmit={handleSubmit}>

        <label>
            Email
        </label>

        <input type='email' name='email' onChange={handleInput} />

        <label>
            Password
        </label>

        <input type='password' name='password' onChange={handleInput} />
    
        <input type='submit' value="login"/>
    </form>
  )
}
