import React, { useEffect, useState } from 'react'
import Child from './Child';


export default function DisplayDataWithAPIProps() {

    const [data,setData]= useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts").then(y=>y.json())
        .then(y=>{
            setData(y)
        })
    
    })
  return (
    <div>

        {
            data.map((value,index)=>{

                return (<Child key={index} data={value}></Child>)
            })
        }
    </div>
  )
}
