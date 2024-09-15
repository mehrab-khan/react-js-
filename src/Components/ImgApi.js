import React, { useEffect, useState } from 'react'

export default function ImgApi(){
    const [showimg , setImg] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=> res.json())
        .then((data)=> setImg(data.url))
    },[])
  return (
    <div>
    {showimg &&
      <img src={`${showimg}`}  /> 
    }
    </div>
  )
}
