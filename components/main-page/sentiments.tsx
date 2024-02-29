import { AllTimeStats, CoinData, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import { Separator } from "../ui/separator";
import ProgressBar from "./progress-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../svg/Info";
import FundamentalsTable from "./fundamentals-table";
import SentimentCards from "./sentiment-cards";
import RadialChart from "../svg/RadialChart";



const Sentiments = () => {

    return (
        < div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col" >
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Performance</div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[20px] text-[#44475B]">Key Events</div>
                <Info />
            </div>
            <div className="w-full">
                <SentimentCards />

            </div>
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[20px] text-[#44475B]">Analyst Estimates</div>
                <Info />
            </div>
            <div className="w-full flex gap-x-10">
                <div className="w-16 h-16 bg-[#EBF9F4] text-[#0FBA83] rounded-full overflow-hidden flex items-center justify-center">
                    <div className="text-xl font-semibold">76%</div>
                </div>
                <div className="w-full">

                    <div className="w-full flex justify-start items-center gap-x-5 font-medium text-[15px] text-[#7C7E8C]">
                        <div className="font-medium text-[15px] text-[#7C7E8C]">Buy</div>
                        <div className="w-[76%] h-1 rounded-[2px] bg-green-500" />
                        <div>76%</div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-x-5 font-medium text-[15px] text-[#7C7E8C]">
                        <div className="font-medium text-[15px] text-[#7C7E8C]">Hold</div>
                        <div className="w-[8%] h-1 rounded-[2px] bg-gray-300" />
                        <div>8%</div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-x-5 font-medium text-[15px] text-[#7C7E8C]">
                        <div className="font-medium text-[15px] text-[#7C7E8C]">Sell</div>
                        <div className="w-[16%] h-1 rounded-[2px] bg-red-600" />
                        <div>16%</div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[20px] text-[#44475B]">Rating</div>
                <Info />
            </div>
            <div className="w-full justify-between flex items-center">
                <div className="flex"><div>Rating Breakdown: 79.83</div><div className="text-[#788F9B]">/100</div></div>
                <div className="flex gap-x-2 justify-center items-center"> <div className="text-[#0FBA83] text-[36.41px]">AAA</div> <div>Stable</div></div>
            </div>
            <RadialChart />
        </div >
    )
}

export default Sentiments