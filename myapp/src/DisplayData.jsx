import React from 'react'
import myData from './mydata.js'

export const DisplayData = () => {
  return (
    <div>{
        
            myData.map((va,index)=>{

                return (<div key={index}>{va.body}</div>)

            })
        
        }</div>
  )
}
