import React from 'react'
import Child from './Child'
import GrandChild from './GrandChild'

const Parent = () => {
    console.log("Toi la  cha")
  return (
    <div>
        <h1>Parent</h1>
       {/* Truyền sever component thông qua props tránh mất đi ưu thế của server component */}
        <Child>
           <GrandChild />
        </Child>
    </div>
  )
}

export default Parent