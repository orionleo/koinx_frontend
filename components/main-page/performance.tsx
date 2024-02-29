"use client";
import { AllTimeStats, CoinData, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import { Separator } from "../ui/separator";
import ProgressBar from "./progress-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../svg/Info";
import FundamentalsTable from "./fundamentals-table";



const Performance = ({ coin }: { coin: CoinData }) => {
    const [loading, setLoading] = useState(true);

    const [globalData, setGlobalData] = useState<MarketData | undefined>(undefined);


    const [yearStats, setYearStats] = useState<YearStats>({
        year_high: 61854.43844040557,
        year_low: 20195.2289502733
    })
    const [weekStats, setWeekStats] = useState<WeekStats>({
        week_high: 62938.70597072361,
        week_low: 50607.52920064971
    })
    const [allTimeStats, setAllTimeStats] = useState<AllTimeStats>({
        allTime_high: 67617.0155448617,
        allTime_low: 67.809,
    })

    const [stats,setStats] = useState<Stats>();

    useEffect(() => {
        async function getData() {
            setLoading(true);
            console.log("Sending api....")
            const res = await axios.get(`/api/stats/${coin.id}`);
            const data = res.data;
            console.log("DATA", data);
            setWeekStats(data.weekStats);
            setYearStats(data.yearStats);
            const allTime_high = data.stats.ath
            const allTime_low = data.stats.alh
            setAllTimeStats({ allTime_high, allTime_low });
            setStats(data.stats)

            const globalRes = await axios.get("/global");
            const globalData = globalRes.data as MarketData;
            setGlobalData(globalData)
            setLoading(false);
        };
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        < div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col" >
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Performance</div>
            </div>

            <ProgressBar start={coin.market_data.low_24h["usd"]} end={coin.market_data.high_24h["usd"]} value={coin.market_data.current_price["usd"]} />
            {(yearStats.year_high > 0) && <ProgressBar start={yearStats.year_low} end={yearStats.year_high} value={coin.market_data.current_price["usd"]} />}
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[20px]">Fundamentals</div>
                <Info />
            </div>
            <div>
                {!loading&&stats!==undefined && globalData && <FundamentalsTable coin={coin} weekStats={weekStats}  allTimeStats={allTimeStats} marketData={globalData} stats={stats} />}
            </div>
        </div >

    )
}

export default Performance