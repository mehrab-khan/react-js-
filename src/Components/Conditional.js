import React from 'react'
import Props from './Props'

export default function Conditional() {
    var age = 2
    function condition(){
        if(age == 2){
            alert('congratulations')
        }
        else{
            {/*if we want pass component*/}
            <Props/>
            {/*Other wise we want to show alert*/}
            alert('This is alert')
        }
    }
  return (
    <div>
      <button onClick={condition}>Click On Condition</button>
    </div>
  )
}
