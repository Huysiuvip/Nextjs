import { fetchUsers } from '@/lib/api';
import React from 'react'

const RequestMemoLayout = async ({ children } :{ children: React.ReactNode }) => {
    const users = await fetchUsers();
  return (
    <div><h1>Layout: {users.length} users</h1>
    {children}</div>
  )
}

export default RequestMemoLayout