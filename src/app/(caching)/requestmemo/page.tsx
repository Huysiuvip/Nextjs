import { fetchUsers } from '@/lib/api';
import React from 'react'

const RequestMemoPage = async () => {
    const users = await fetchUsers();

  return (
    <div>
        <h1>Request Memo Users: {users.length}</h1>
        <UserA />   
        <UserB />
    </div>
  )
}

const UserA = async () => {
    const users = await fetchUsers();
    return <div>User A: {users.length}</div>
}
const UserB = async () => {
    const users = await fetchUsers();
    return <div>User B: {users.length}</div>
}

export default RequestMemoPage