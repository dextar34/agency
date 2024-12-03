import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import cn from '../lib/cn'

const Root = () => {
  return (
    <div className={cn('text-white')}>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default Root
