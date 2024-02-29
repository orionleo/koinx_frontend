"use client";
import React, { useEffect, useState } from 'react'
import BasicInfo from './basic-info'
import { CoinData } from '@/constants/interfaces'
import axios from 'axios';
import data from "../../constants/bitcoin.json";
import Menu from './menu';
import Performance from './performance';
import Sentiments from './sentiments';
import Information from './information';

const MainPage = ({ coinId }: { coinId: string }) => {
    // const [coin, setCoin] = useState<CoinData>();
    const [coin, setCoin] = useState<CoinData>(data);

    // useEffect(() => {
    //     async function getCoin() {
    //         const res = await axios.get(`/api/${coinId}`);
    //         const data = res.data as CoinData;
    //         setCoin(data);
    //     }
    //     getCoin();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    return (
        <>
            {coin && (<div className="md:w-2/3 w-full flex flex-col p-5">
                <div className="flex">
                    <p className="text-[#3E5765]">Cryptocurrencies{` >>>`}&nbsp;</p>
                    <p className="text-[#0F1629]">{coin.name}</p>
                </div>
                <div className='w-full flex flex-col gap-y-5'>
                    <BasicInfo coin={coin} />
                    <Menu />
                    <Performance coin={coin}  />
                    <Sentiments />
                    <Information coin={coin} />
                </div>
            </div>)}
        </>
    )
}

export default MainPage