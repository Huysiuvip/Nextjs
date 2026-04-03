// để nhận biết đâu là server component đâu là client component ta nhìn lên đầu trang
// nếu có chữ 'use client' thì đó là client component còn không có thì đó là server component
import React from 'react'
import Parent from '@/components/Parent'
import Faker from '@/components/Faker'





const ServerDemoPage = () => {
  return (
<div>
  <Parent />
</div>
  )
}

export default ServerDemoPage