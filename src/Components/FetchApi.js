import React, { useEffect, useState } from 'react'
import FetchReturnData from './FetchReturnData';
export default function FetchApi() {
    const [SaveData, setData] = useState(null);
    useEffect(()=>{
         

       
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
         .then((daata)=>setData(daata))
        
    },[])

  return (
    <div>
         
            {SaveData &&
                SaveData.map((data)=>{
                    return <FetchReturnData name={data.name} email = {data.email} />
                } )
            }
        
    </div>
  )
}
