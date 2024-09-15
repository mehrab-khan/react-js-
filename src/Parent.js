import React from 'react'
import Child from './Child'
export default function Parent() {
    function name(para){
       console.log(para)
    }
  return (
    <div>
        {/*Consume data from child*/}
    <Child name={name}/>
    </div>
  )
}
