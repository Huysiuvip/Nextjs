"use client"

import { useEffect, useState } from 'react'
import {useWindowSize} from 'react-use'

const ReactUse = () => {
    // Sử dụng hook useWindowSize để lấy kích thước của cửa sổ trình duyệt
    // Điều này sẽ gây ra lỗi hydration mismatch nếu chúng ta cố gắng render kích thước này trên server, vì server không có khái niệm về kích thước cửa sổ
    // Lần này useWindowSize là 1 hook nên không thể chạy trong câu điều kiện, lặp, hàm gọi lại nên không thể dùng useEffect để tránh lỗi hydration mismatch được
    // Ta có thể dùng 1 sate để theo dõi component này được mount hay chưa

  const { width, height } = useWindowSize()
  const [ mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  return (
    <div>Chiều rộng: {width}, Chiều cao: {height}</div>
  )
}

export default ReactUse