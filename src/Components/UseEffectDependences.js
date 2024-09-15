import React from 'react'
import { useState , useEffect } from 'react'
export default function UseEffectDependences() {
    const [data , setData] = useState(0);
    const [count , setCount] = useState(0);
    /*useEffect e dependencies jeita use hobe oita change holei useEffect ta kaj korbe jemon count e dependencies
    use hoise tai count e change asle useEffect er moddher function kaj korbe*/
    useEffect(()=>{
        console.log('Count Done')
    },[count])
  return (

    <div>
        <h1>UseEffect Dependencies</h1>
    <p>Count is {count}</p>
    <p>Data is {data}</p>
    <button onClick={()=>setCount(count + 1)}>Count Up</button> 
    <button onClick={()=>setData(data + 1)}>Data Up</button> 
    </div>
  )
}
