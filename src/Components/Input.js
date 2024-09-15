import React from 'react'
import { useState } from 'react'
export default function Input() {
    const [data, setData] = useState('')
    console.log(data)
    FormData = (event) => {
        console.log(event.target.value)
        setData(event.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Input Data 2 using state' onChange={(e)=>setData(e.target.value)} />
      {/*Another way*/}
      <input type="text"placeholder='Input Data' onChange={FormData} />
    </div>
  )
}
