"use client"
// client component có thể sử dụng state, event, lifecycle method còn server component thì không thể sử dụng được những thứ đó
// client component có thể sử dụng được các hook của react như useState, useEffect còn server component thì không thể sử dụng được các hook đó
// client component có thể sử dụng được các API của trình duyệt như localStorage, sessionStorage, document, window còn server component thì không thể sử dụng được các API đó
import React from 'react'
import {  faker } from '@faker-js/faker'
import Parent from '@/components/Parent'
import ReactUse from '@/components/ReactUse'

import dynamic from 'next/dynamic'
import ClientSelect from '@/components/ClientSelect'

const ClientDemo = () => {
  const name = faker.person.fullName()
  return (
    <div>
      <ClientSelect/>
    </div>
  )
}

export default ClientDemo