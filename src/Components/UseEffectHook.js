import React from 'react'
import { useState, useEffect } from 'react'
export default function UseEffectHook() {
    const [count, setCount] = useState(0);
    /*This has no dependences on this useEffect that's why this is infinite like a loop when our website run*/
    useEffect(()=>{
        document.title = `you've ${count} notifiactions` 
        setTimeout(()=>{
            setCount(count + 1)
        },1000)
    },[])
    /*
    
    
    But when we use dependences [] it's useEffect run only one time after webpage load
    
    
     useEffect(()=>{
        document.title = `you've ${count} notifiactions` 
        setTimeout(()=>{
            setCount(count + 1)
        },1000)
    },[])
    
    
    
    */




  return (
    <div>
      <p>You have {count} notifications</p>
    </div>
  )
}
