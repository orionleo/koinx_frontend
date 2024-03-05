import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { coinId: string } }) {
    try {
        console.log("COINID",params.coinId)
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`);
        const data = res.data;
        return NextResponse.json(data);
    } catch (error) {
        const e = error as unknown as any;
        throw new Error(e.message)
    }
}