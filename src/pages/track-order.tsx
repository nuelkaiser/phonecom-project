import Nav from '@/components/shared/nav/Nav'
import SideNav from '@/components/sideNav/SideNav'
import React from 'react'

const TrackOrder = () => {
    return (
        <div className='flex'>
            <SideNav />
            <div className='w-full'>
                <Nav />
            </div>
        </div>
    )
}

export default TrackOrder