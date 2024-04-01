import React, { useEffect, useState } from 'react'

export default function APIData() {
   const [data,setData] = useState([]);

   
   useEffect(()=>{

    fetch("https://course-api.com/react-tours-project")
    .then(y=>y.json())
    .then(y=>{
        setData(y);
    })

   },[])

   const handleNI = (index)=>{

    const p = [...data];

    p.splice(index,1);
    setData(p);

   }
  return (
    <div>{
        
       data.map((value,index)=>{

        return (<div>{value.name }
        { (index % 2 == 0) && <button onClick={()=>{
            handleNI(index)
        }}>NI</button>  }
        </div>)

       })
        
        
        }</div>
  )
}
