import React, { useState } from 'react'

import data from './birthdateData';
export default function BirthDateDisplay() {

  const [bdata,bsetData] = useState(data);

  const clearData = ()=>{

    let p = [...bdata];
    p.splice(0);
  
   bsetData([]);

  
   
  }


  return (
    <div>{
        bdata.map((v)=>{

          return (<div>{v.name}</div>)

        })
      
      }
      
      <button onClick={clearData}>Clear</button>
      </div>
  )
}
