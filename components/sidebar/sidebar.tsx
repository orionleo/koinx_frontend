import React from 'react'
import GetStarted from './get-started'
import ThreeTrendingCoins from './three-trending-coins'

const Sidebar = () => {
    return (
        <div className="md:w-1/3 w-full space-y-10 lg:flex flex-col justify-center items-center">
            <GetStarted />
            <ThreeTrendingCoins />
        </div>
    )
}

export default Sidebar