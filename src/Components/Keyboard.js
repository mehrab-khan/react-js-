import React from 'react'

export default function Keyboard() {
    function onKeyDownText(){
        console.log('Key Down Success')
    }
    function onKeyUpText(){
        console.log('Key Up Success')
    }
    function onKeyPressText(){
        console.log('Key Press Success')
    }
  return (
    <div>
        {/*when we press any key and it obviously down when it pressed*/}
      <input type="text" onKeyDown={onKeyDownText}/>
      {/*when we press any key and when we remove to press it obviously up when it unpressed*/}
      <input type="text" onKeyUp={onKeyUpText}/>
      {/*when we press any key it counts*/}
      <input type="text" onKeyPress={onKeyPressText} />
    </div>
  )
}
