import React from 'react'
import { useState } from 'react'
export default function Toggle() {
    const [toggle ,setToggle ] = useState(true);
    function Change(){
        setToggle(!toggle);
    }
  return (
    <div>
      <button onClick={Change}>{toggle ? 'Hide' : 'Show'}</button>
      <p>{toggle ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis 
        veritatis nulla sint tempora, repellendus recusandae reiciendis
         placeat cumque optio veniam exercitationem quidem quas error dolorem explicabo
          sit enim sapiente nisi necessitatibus sed quis laboriosam voluptatum! Quibusdam
           veniam odio eveniet modi, 
        sequi reiciendis amet magni quos, repellendus, magnam perferendis quisquam?` : ''}</p>
    </div>
  )
}
