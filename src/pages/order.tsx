import Nav from '@/components/shared/nav/Nav'
import SideNav from '@/components/sideNav/SideNav'
import React from 'react'

const Order = () => {
  return (
    <div className='flex'>
            <SideNav />
            <div className='w-full'> 
                <Nav />
            </div>
        </div>
  )
}

export default Order