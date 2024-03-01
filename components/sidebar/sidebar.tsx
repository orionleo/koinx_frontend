import React from 'react'
import GetStarted from './get-started'
import ThreeTrendingCoins from './three-trending-coins'

const Sidebar = () => {
    return (
        <div className="w-full space-y-10 lg:flex flex-col justify-start items-center">
            <GetStarted />
            <ThreeTrendingCoins />
        </div>
    )
}

export default Sidebar