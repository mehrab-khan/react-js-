import React from 'react'
import { useState } from 'react'
export default function DataTime() {
  const [date ,setDate]=useState('')
  const Date = (e) => {
    setDate(e.target.value)
  }
  console.log(date)
  return (
    
    <div>
      <input type="date" onChange={Date} />
    </div>
  )
}
