import CoinId from "@/app/[coinId]/page";
import { AllTimeStats, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { coinId: string } }) {
    try {
        const year = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=365`);
        let yearData = year.data;
        const year_prices = yearData.prices.map((entry: any[]) => entry[1]);
        const year_high = Math.max(...year_prices);
        const year_low = Math.min(...year_prices);
        const yearStats: YearStats = { year_high, year_low };

        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%2C7d%2C1y&locale=en&precision=2`)
        const data = res.data[0];
        const stats = data as Stats;

        const weekPrices = stats.sparkline_in_7d.price;
        const week_high = Math.max(...weekPrices);
        const week_low = Math.min(...weekPrices);
        const weekStats: WeekStats = { week_high, week_low };

        return NextResponse.json({ yearStats, weekStats, stats });
    } catch (error) {
        const e = error as unknown as any;
        console.log(e.message)
        throw new Error(e.message)
    }
}