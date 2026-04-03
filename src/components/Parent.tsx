import React from 'react'
import Child from './Child'
import GrandChild from './GrandChild'

const Parent = () => {
    console.log("Toi la  cha")
  return (
    <div>
        <h1>Parent</h1>
        <GrandChild />
        <Child />
    </div>
  )
}

export default Parent