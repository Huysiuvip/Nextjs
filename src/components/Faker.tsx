"use client"
import React from 'react'
import { faker } from '@faker-js/faker'
import { useState, useEffect } from 'react'

const Faker = () => {
    const [name, setName] = useState("")
  // Chạy sau khi component được render lần đầu tiên, giúp tránh lỗi hydration mismatch
  // Đây là lỗi kết quả html từ sever không khớp với html được render trên client
    useEffect(() => {
        setName(faker.person.fullName())
    }, [])
  return (
    <div>{name}</div>
  )
}

export default Faker