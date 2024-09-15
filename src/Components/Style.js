import React from 'react'
/*This is for module css*/
import Hablu from './Hablu.module.css'
export default function Style() {
    /*inline css way 2*/
    const ElementOne = {
        color : 'blue'
    }
  return (
    <div>
        {/*inline css way 1*/}
      <h1 style={{color:'red'}}>Hello World</h1>
      {/*inline css way 2*/}
      <h1 style={ElementOne}>Hello World way 2</h1>
      {/*For external import way is ....import './newstyle.css.....*/}
      <h2 className='stylethis'>Hello World External</h2>
      <h4 className={Hablu.Error}>This is module css</h4>
    </div>
  )
}
