import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { coinId: string } }) {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/global`);
        const data = res.data;
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        const e = error as unknown as any;
        throw new Error(e.message)
    }
}