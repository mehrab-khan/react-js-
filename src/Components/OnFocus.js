import React from 'react'

export default function OnFocus() {
    function onFocusInput(){
        console.log('Focused')
    }
    function onBlurInput(){
        console.log('Blured')
    }
  return (
    <div>
    {/*when we enter mouse on input field and when we out mouse into the input field*/}
      <input type="text" onFocus={onFocusInput} onBlur={onBlurInput}  placeholder='On Focus'/> <br />
     
       
    </div>
  )
}
