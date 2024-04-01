import React, { useState } from 'react'

export const Login = () => {

    const [data,setData] = useState({
        Email : "",
        Password : ""
    })

    const handleInput = (e)=>{

        setData({...data, [e.target.name]: e.target.value})
    }

   
    const handleSubmit = (e)=>{

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

        <input type='password' name='Password' onChange={handleInput} />
    
        <input type='submit' value="login"/>
    </form>
  )
}
