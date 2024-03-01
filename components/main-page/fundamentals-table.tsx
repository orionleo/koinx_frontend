import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AllTimeStats, CoinData, MarketData, Stats, WeekStats } from "@/constants/interfaces"
import { stat } from "fs";

interface FundamentalsTableProps {
    coin: CoinData,
    weekStats: WeekStats,
    allTimeStats: AllTimeStats,
    marketData: MarketData,
    stats: Stats
}

const FundamentalsTable = ({ coin, weekStats, allTimeStats, marketData, stats }: FundamentalsTableProps) => {


    const symbol = coin.symbol;
    
    // console.log(marketData);
    // // Assuming market_cap_percentage has the type { btc: number; eth: number; usdt: number; ... }
    // const marketCapPercentages: { [key: string]: number } = marketData.data.market_cap_percentage;

    // // Use type assertion to tell TypeScript that symbol is a valid key
    // const percentage = marketCapPercentages[symbol] as number;
    return (
        <div className="flex">
            <div className="w-1/2">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">{coin.name} Price</TableCell>
                            <TableCell className="text-[14px]">$ {coin.market_data.current_price["usd"]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">24h Low / 24h High</TableCell>
                            <TableCell className="text-[14px]">{`$ ${coin.market_data.low_24h["usd"]} / $ ${coin.market_data.high_24h["usd"]}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">7d Low / 7d High</TableCell>
                            <TableCell className="text-[14px]">{`$ ${weekStats.week_low.toFixed(2)} / $ ${weekStats.week_high.toFixed(2)}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">Trading Volume</TableCell>
                            <TableCell className="text-[14px]">{`$ ${coin.market_data.total_volume["usd"]}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">Market Cap Rank</TableCell>
                            <TableCell className="text-[14px]">{`#${coin.market_cap_rank}`}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="w-1/2">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">{coin.name} Market Cap
                            </TableCell>
                            <TableCell className="text-[14px]">$ {coin.market_data.market_cap["usd"]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">Market Cap Dominance</TableCell>
                            {/* <TableCell className="text-[14px]">{`${percentage}%`}</TableCell> */}
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">Volume / Market Cap</TableCell>
                            <TableCell className="text-[14px]">{`${stats.total_volume / stats.market_cap}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">All-Time High</TableCell>
                            <TableCell className="text-[14px]">
                                <div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            {`$${stats.ath}`}
                                        </div>
                                        <div className={`${(coin.market_data.current_price["usd"] - stats.ath) <0?"text-red-600":"text-green-500"}`}>
                                            {`${(((coin.market_data.current_price["usd"] - stats.ath) / stats.ath) * 100).toFixed(2)} %`}
                                        </div>
                                    </div>
                                    <div>
                                        {stats.ath_date}
                                    </div>

                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-[14px] text-[#768396]">All-Time High</TableCell>
                            <TableCell className="text-[14px]">
                                <div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            {`$${stats.atl}`}
                                        </div>
                                        <div className={`${(coin.market_data.current_price["usd"] - stats.atl) <0?"text-red-600":"text-green-500"}`}>
                                            {`${(((coin.market_data.current_price["usd"] - stats.atl) / coin.market_data.current_price["usd"]) * 100).toFixed(2)} %`}
                                        </div>
                                    </div>
                                    <div>
                                        {stats.atl_date}
                                    </div>

                                </div>
                            </TableCell>
                        </TableRow>
                      
                    </TableBody>
                </Table>
            </div>
        </div>

    )
}

export default FundamentalsTable