"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ProfitLossArrow from '../svg/ProfitLossArrow';
import { CoinItem, TrendingCoinData } from '@/constants/interfaces';



const ThreeTrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState<CoinItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/trending-coins');
                const data = res.data as TrendingCoinData;
                setTrendingCoins(data.coins.slice(0, 3));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        const intervalId = setInterval(fetchData, 86400000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="flex flex-col space-y-4 justify-center text-black text-center items-center w-3/4 py-10 bg-white rounded-[16px]">
            <h2 className='text-[24px] font-semibold'>Trending Coins (24h)</h2>
            <div className="w-full px-4 gap-y-4 flex flex-col">
                {trendingCoins.length === 3 && (
                    trendingCoins.map(trendingCoin => {
                        const isProfit = parseInt(String(trendingCoin.item.data.price_change_percentage_24h["usd"])) > 0
                        return (
                            <div key={trendingCoin.item.coin_id} className='w-full flex justify-between items-center'>
                                <div className='flex items-center text-left'>
                                    <Image src={trendingCoin.item.thumb} alt="" width={24} height={24} className='rounded-full' />
                                    <div className='ml-2 text-wrap'>{`${trendingCoin.item.name} (${trendingCoin.item.symbol.toUpperCase()})`}</div>
                                </div>
                                <div className={`flex justify-evenly items-center w-[90px] text-[16px] font-medium ${isProfit ? "text-[#14B079] bg-[#EBF9F4]" : "text-red-600 bg-red-100"} p-2 rounded-[4px]`}>
                                    <div>
                                        <ProfitLossArrow profit={isProfit} />
                                    </div>
                                    <div>
                                        {`${trendingCoin.item.data.price_change_percentage_24h["usd"].toFixed(2)}%`}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default ThreeTrendingCoins