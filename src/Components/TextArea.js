import React from 'react'
import { useState } from 'react'
export default function TextArea() {
    const [textareaValue, setTextareaValue] = useState('');

  // Handler function to update the textarea value
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <div>
    <h2>Textarea Example</h2>
    <textarea
      value={textareaValue}
      onChange={handleTextareaChange}
      placeholder="Enter text here..."
      rows={4}
      cols={50}
    />
    <p>Textarea value: {textareaValue}</p>
  </div>
  )
}
