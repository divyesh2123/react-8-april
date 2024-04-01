import React, { useEffect, useState } from 'react'

export const DisplayDataWithAPI = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setData(y);
        })
    },[])

  return (
    <div>{
        data.map((v,index)=>{

            return(<div key={index}>{v.body}</div>)

        })
        }</div>
  )
}
