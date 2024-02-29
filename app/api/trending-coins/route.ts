import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        const data = res.data;
        return NextResponse.json(data);
    } catch (error) {
        return Error("Server Error")
    }
}