"use client"  // dùng client để dùng được các hook

import { useParams } from 'next/navigation'
import React from 'react'

const TodoInfo = () => {
  const params = useParams() // useParams() là 1 hook cho phép lấy params từ client component
    return (
      <div>TodoID:{params.id}</div>
    )
}

export default TodoInfo