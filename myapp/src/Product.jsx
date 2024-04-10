import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import ProductItem from './ProductItem'

export default function Product() {

  const [data,setData] = useState([]);

  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products").then(y=>{
        setData(y.data)
    })

  },[])
  return (
    <>
       {
        data.map((value)=>{

          return (<ProductItem item={value}></ProductItem>)
        })
       } 
    </>
  )
}
