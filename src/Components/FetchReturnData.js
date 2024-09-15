import React from 'react'

export default function FetchReturnData(props) {
  return (
    <div>
        <h1>Fetch Data</h1>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  )
}
