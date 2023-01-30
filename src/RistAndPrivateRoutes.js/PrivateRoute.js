import React from 'react'
import { Navigate, Outlet } from 'react-router'


const PrivateRoute = (props) => {
  return (
    <div>
      {props.isUserAthenticated? <Outlet />:<Navigate to='/login' />}
    </div>
  )
}

export default PrivateRoute