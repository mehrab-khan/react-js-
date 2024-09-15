import React from 'react'

export default function Basic() {
    const name = 'Mehrab'
  return (
    <div>
      {/*This is JSX Expression*/}
      <h1>We know 5 + 5 = {5+5}</h1>
      {/*Templete litrels*/}
      <h1>{`My name is ${name}`}</h1>
   
    </div>
  )
}
