import React from 'react'

export default function Radio() {
  function gender(e){
    console.log(e.target.value)
  }
  return (
    <div>
      <input type="radio" name="gender" value='male' onChange={gender} />
      <label htmlFor="">Male</label>
      <input type="radio" name="gender" value='female' onChange={gender} />
      <label htmlFor="">Female</label>
    </div>
  )
}
