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
    const filteredTrendingCoins = trendingCoins.filter((trendingCoin) => {
        const price_usd = Number(trendingCoin.item.data.price.slice(1)).toFixed(2);
        return price_usd !== "NaN"
    });

    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className="bg-white w-full flex justify-start items-center gap-x-2 p-5">
                <div className="font-semibold text-[24px]">You may also like</div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[75%] md:w-[80%]"
            >
                <CarouselContent>
                    {filteredTrendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        const price_usd = Number(trendingCoin.item.data.price.slice(1)).toFixed(2);
                        if (!Number.isNaN(price_usd)) {
                            return (
                                <CarouselItem key={index} className="md:basis-1/5 basis-[44%]">
                                    <div className="py-1">
                                        <Card className="shadow-sm px-0 border rounded-lg md:h-[160px] h-[80px]">
                                            <CardContent className="flex flex-col px-0 ">
                                                <div className="flex justify-center px-0 w-full md:py-3 pt-3 md:space-x-1 space-x-[2px] ">
                                                    <div className="">
                                                        <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={2} height={2} className="rounded-full md:w-[26px] md:h-[26px] w-[16px] h-[16px]" />
                                                    </div>
                                                    <div className="md:text-[16px] flex justify-center items-center text-[12px] ">
                                                        {trendingCoin.item.symbol}
                                                    </div>
                                                    <div className={`${isProfit ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} font-normal md:text-[12px] text-[8px]  rounded-md flex items-center justify-center px-1 md:py-1 py-0`}>
                                                        {`${isProfit ? "+" : ""} ${trendingCoin.item.data.price_change_percentage_24h["usd"].toFixed(2)}`}
                                                    </div>
                                                </div>
                                                <div className="flex w-full text-[12px] md:text-[20px] px-4">
                                                    {`$ ${price_usd}`}

                                                </div>
                                                <div><Image width={140} height={58} src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" className="h-[36px] px-2 w-full  md:w-[140px] md:h-[58px] pb-4 mt-0" /></div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        }
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
                className="w-[75%] md:w-[80%]"
            >
                <CarouselContent>
                    {filteredTrendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        const price_usd = Number(trendingCoin.item.data.price.slice(1)).toFixed(2);
                        if (!Number.isNaN(price_usd)) {
                            return (
                                <CarouselItem key={index} className="md:basis-1/5 basis-[44%]">
                                    <div className="py-1">
                                        <Card className="shadow-sm px-0 border rounded-lg md:h-[160px] h-[80px]">
                                            <CardContent className="flex flex-col px-0 ">
                                                <div className="flex justify-center px-0 w-full md:py-3 pt-3 md:space-x-1 space-x-[2px] ">
                                                    <div className="">
                                                        <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={2} height={2} className="rounded-full md:w-[26px] md:h-[26px] w-[16px] h-[16px]" />
                                                    </div>
                                                    <div className="md:text-[16px] flex justify-center items-center text-[12px] ">
                                                        {trendingCoin.item.symbol}
                                                    </div>
                                                    <div className={`${isProfit ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} font-normal md:text-[12px] text-[8px]  rounded-md flex items-center justify-center px-1 md:py-1 py-0`}>
                                                        {`${isProfit ? "+" : ""} ${trendingCoin.item.data.price_change_percentage_24h["usd"].toFixed(2)}`}
                                                    </div>
                                                </div>
                                                <div className="flex w-full text-[12px] md:text-[20px] px-4">
                                                    {`$ ${price_usd}`}

                                                </div>
                                                <div><Image width={140} height={58} src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" className="h-[36px] px-2 w-full  md:w-[140px] md:h-[58px] pb-4 mt-0" /></div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        }
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default TrendingCoins