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
                className="w-[82%] md:w-[80%]"
            >
                <CarouselContent>
                    {filteredTrendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        const price_usd = Number(trendingCoin.item.data.price.slice(1)).toFixed(2);
                        if (!Number.isNaN(price_usd)) {
                            return (
                                <CarouselItem key={index} className="md:basis-1/5 basis-[44%]">
                                    <div className="py-1 px-1">
                                        <Card className="shadow-sm border rounded-lg h-[160px]">
                                            <CardContent className="flex flex-col">
                                                <div className="flex justify-start items-center py-3 md:space-x-1 ">
                                                    <div>
                                                        <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={26} height={26} className="rounded-full md:w-[26px] md:h-[26px] w-[16px] h-[16px]" />
                                                    </div>
                                                    <div className="md:text-[16px] text-[12px] ">
                                                        {trendingCoin.item.symbol}
                                                    </div>
                                                    <div className={`${isProfit ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} font-normal md:text-[12px] text-[8px]  rounded-md flex items-center justify-center px-1 md:py-1`}>
                                                        {`${isProfit ? "+" : ""} ${trendingCoin.item.data.price_change_percentage_24h["usd"].toFixed(2)}`}
                                                    </div>
                                                </div>
                                                <div className="flex justify-start w-full">
                                                    {`$ ${price_usd}`}

                                                </div>
                                                <div><Image width={140} height={58} src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" /></div>
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
                className="w-[82%] md:w-[80%]"
            >
                <CarouselContent>
                    {filteredTrendingCoins.map((trendingCoin, index) => {
                        const isProfit = trendingCoin.item.data.price_change_percentage_24h["usd"] > 0;
                        const price_usd = Number(trendingCoin.item.data.price.slice(1)).toFixed(2);
                        if (!Number.isNaN(price_usd)) {
                            return (
                                <CarouselItem key={index} className="md:basis-1/5 basis-[44%]">
                                    <div className="py-1 px-1">
                                        <Card className="shadow-sm border rounded-lg h-[160px]">
                                            <CardContent className="flex flex-col">
                                                <div className="flex justify-start items-center py-3 md:space-x-1 ">
                                                    <div>
                                                        <Image src={trendingCoin.item.thumb} alt="Coin thumbnail" width={26} height={26} className="rounded-full md:w-[26px] md:h-[26px] w-[16px] h-[16px]" />
                                                    </div>
                                                    <div className="md:text-[16px] text-[12px] ">
                                                        {trendingCoin.item.symbol}
                                                    </div>
                                                    <div className={`${isProfit ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} font-normal md:text-[12px] text-[8px]  rounded-md flex items-center justify-center px-1 md:py-1`}>
                                                        {`${isProfit ? "+" : ""} ${trendingCoin.item.data.price_change_percentage_24h["usd"].toFixed(2)}`}
                                                    </div>
                                                </div>
                                                <div className="flex justify-start w-full">
                                                    {`$ ${price_usd}`}

                                                </div>
                                                <div><Image width={140} height={58} src={trendingCoin.item.data.sparkline} alt="Coin thumbnail" /></div>
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