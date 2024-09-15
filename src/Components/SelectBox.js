import React from 'react'
import { useState } from 'react'
export default function SelectBox() {
    FormData = (event) =>{
        console.log(event.target.value)
    }
    /*2nd Way*/
    const [selectedValue, setSelectedValue] = useState('');

    // Handler function to update the selected value
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    
    <div>
      <select  onChange={FormData}>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JS">Javascript</option>
      </select>
      {/*Another way to usestate*/}
      <h2>Select Box Example</h2>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
     
    
  )
}
