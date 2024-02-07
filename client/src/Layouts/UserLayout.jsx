import React from 'react'
import { Outlet } from 'react-router-dom'
import { useUser } from '../Context/userContext'

function UserLayout() {

  const { user, setUser, Logout } = useUser()

  return (
    <>
        {user.role ? <Outlet /> : ''}
    </>
  )
}

export default UserLayout