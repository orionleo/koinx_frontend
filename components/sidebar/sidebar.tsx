import React from 'react'
import GetStarted from './get-started'
import ThreeTrendingCoins from './three-trending-coins'

const Sidebar = () => {
    return (
        <div className="w-full space-y-10 flex-col flex justify-center md:justify-start items-center">
            <div className='md:p-0 p-5'>
                <GetStarted />
            </div>
            <ThreeTrendingCoins />
        </div>
    )
}

export default Sidebar