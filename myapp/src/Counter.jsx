import React, { useState } from 'react'

export const Counter = () => {

   const [value,setValue] = useState(0);

    const handleCounter = ()=>{
      
      setValue("2");
        if(value >0)
        {
        setValue(value-1);
        }
       
    }
  return (
    <div  id="d" onClick={handleCounter}>{value}</div>
  )
}
