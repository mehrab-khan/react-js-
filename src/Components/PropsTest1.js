import React from 'react'
import Props from './Props'
import { useState } from 'react';
export default function PropsTest1() {
   const [count, setCount] = useState(0);
   function update(){
    setCount(count+1)
   }
  return (
    <div>
      <Props name='Mehrab' pass='mehrab450' data='6' count={count}/>
       <button onClick={update}>Update</button>
    </div>
  )
}
