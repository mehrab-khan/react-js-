import React from 'react'
import useCustomHook from './useCustomHook'
export default function ShowCustomHook() {
    const [data] = useCustomHook('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {data && 
    data.map((item)=>{
        return <p key={item.id}>Custom Hook Data{item.name + item.email}</p>
    })
      }
    </div>
  )
}
