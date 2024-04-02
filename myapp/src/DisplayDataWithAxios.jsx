import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DisplayDataWithAxios = () => {

    const [data,setData]= useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")       
        .then(y=> {
            setData(y.data);
        })
    },[])
  return (
    <div>{
        <div>{
            data.map((value,index)=>{

                return (<div key={index}>{value.title}</div>)
            })
            
            
            
            }</div>
        
        }</div>
  )
}
