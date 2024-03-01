/* eslint-disable @next/next/no-img-element */
"use client";
import { CoinItem, TrendingCoinData } from "@/constants/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import SentimentFirst from "../svg/SentimentFirst";
import SentimentSecond from "../svg/SentimentSecond";
import Image from "next/image";

const TrendingCoins = () => {

    const [trendingCoins, setTrendingCoins] = useState<CoinItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/trending-coins');
                const data = res.data as TrendingCoinData;
                setTrendingCoins(data.coins);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        const intervalId = setInterval(fetchData, 86400000);

        return () => clearInterval(intervalId);
    }, []);
    // console.log(trendingCoins[0].item.data.sparkline);
    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className="bg-white w-full flex justify-start items-center gap-x-2 p-5">
                <div className="font-semibold text-[24px]">You may also like</div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[80%]"
            >
                <CarouselContent>
                    {trendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        return (
                            <CarouselItem key={index} className="basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <div className="flex justify-around gap-x-5">
                                                <div className="flex gap-x-2">
                                                    <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={12} height={12} className="rounded-full" />
                                                    {trendingCoin.item.name}
                                                </div>
                                                <div className={`${isProfit?"bg-green-200 text-green-500":"bg-red-200 text-red-500"} p-1  rounded-md`}>
                                                    {(trendingCoin.item.data.price_change_percentage_24h["usd"]).toFixed(2)}
                                                </div>
                                            </div>
                                            <div className="flex justify-start w-full">
                                                {trendingCoin.item.data.price}

                                            </div>
                                            <div><img src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" /></div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="bg-white w-full flex justify-start items-center gap-x-2 p-5">
                <div className="font-semibold text-[24px]">Trending Coins</div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[80%]"
            >
                <CarouselContent>
                    {trendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        return (
                            <CarouselItem key={index} className="basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <div className="flex justify-around gap-x-5">
                                                <div className="flex gap-x-2">
                                                    <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={12} height={12} className="rounded-full" />
                                                    {trendingCoin.item.name}
                                                </div>
                                                <div className={`${isProfit?"bg-green-200 text-green-500":"bg-red-200 text-red-500"} p-1  rounded-md`}>
                                                    {(trendingCoin.item.data.price_change_percentage_24h["usd"]).toFixed(2)}
                                                </div>
                                            </div>
                                            <div className="flex justify-start w-full">
                                                {trendingCoin.item.data.price}

                                            </div>
                                            <div><img src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" /></div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default TrendingCoins