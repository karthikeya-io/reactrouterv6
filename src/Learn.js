import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Learn = () => {
  return (
    <div>
        <h1>Learn</h1>
        <h4>All courses are listed here</h4>
        <Link to="/learn/courses" className='btn btn-success'>
        courses
        </Link><span>   </span>
        <Link to="/learn/bundles" className='btn btn-success'>
        bundle
        </Link>
        <Outlet/>
    </div>
  )
}

export default Learn