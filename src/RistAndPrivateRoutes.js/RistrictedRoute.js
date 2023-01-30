import React from 'react'
import { Navigate, Outlet } from 'react-router'


const RistrictedRoute = (props) => {
  return (
    <div>
      {props.isUserAthenticated? <Navigate to='/' />:<Outlet /> }
    </div>
  )
}

export default RistrictedRoute