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
import { Separator } from "@radix-ui/react-separator";
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

    // // Assuming market_cap_percentage has the type { btc: number; eth: number; usdt: number; ... }
    // const marketCapPercentages: { [key: string]: number } = marketData.data.market_cap_percentage;

    // // Use type assertion to tell TypeScript that symbol is a valid key
    // const percentage = marketCapPercentages[symbol] as number;
    function formatDateString(inputDateString: string) {
        const currentDate = new Date();
        const inputDate = new Date(inputDateString);

        // Calculate the difference in years
        const yearDifference = currentDate.getUTCFullYear() - inputDate.getUTCFullYear();

        // Format the date string
        const formattedDateString = inputDate.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });

        return `${formattedDateString} (${yearDifference < 3 ? "about" : "over"} ${yearDifference} ${yearDifference === 1 ? 'year' : 'years'})`;
    }

    return (
        <div className="flex md:flex-row flex-col md:space-x-10">
            <div className="md:w-1/2 w-full">
                <Table className="text-[14px]">
                    <TableBody>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">{coin.name} Price</TableCell>
                            <TableCell className="px-0  flex justify-end">$ {coin.market_data.current_price["usd"].toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">24h Low / 24h High</TableCell>
                            <TableCell className="px-0  flex justify-end">
                                {`$${coin.market_data.low_24h["usd"].toFixed
                                    (2)} / $${coin.market_data.high_24h["usd"].toFixed(2)}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">
                                7d Low / 7d High</TableCell>
                            <TableCell className="px-0  flex justify-end">
                                {`$${weekStats.week_low.toFixed(2)} / $${weekStats.week_high.toFixed(2)}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">Trading Volume</TableCell>
                            <TableCell className="px-0  flex justify-end">{`$ ${coin.market_data.total_volume["usd"]}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">Market Cap Rank</TableCell>
                            <TableCell className="px-0  flex justify-end">{`#${coin.market_cap_rank}`}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden block bg-[#DEE2E6] h-[1px]" />
            <div className="md:w-1/2 w-full text-[10px]">
                <Table className="text-[14px] w-full">
                    <TableBody>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">{coin.name} Market Cap
                            </TableCell>
                            <TableCell className="px-0  flex items-center justify-end">
                                $ {coin.market_data.market_cap["usd"]}</TableCell>
                        </TableRow>
                        <TableRow className="w-full px-0">
                            <TableCell className="px-0 font-medium text-[#768396]">Market Cap Dominance</TableCell>
                            {/* <TableCell className="">{`${px-0 marketData.data.market_cap_percentage["btc"]}%`}</TableCell> */}
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 font-medium  text-[#768396]">Volume / Market Cap</TableCell>
                            <TableCell className="px-0  flex justify-end">{`${(stats.total_volume / stats.market_cap).toFixed(4)}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 md:py-2 font-medium  text-[#768396]">All-Time High</TableCell>
                            <TableCell className="px-0 md:py-2  flex w-full justify-end">
                                <div className="flex flex-col w-full justify-end px-0">

                                    <div className="flex w-full justify-end gap-x-1 px-0">
                                        <div>
                                            {`$${stats.ath.toFixed(2)}`}
                                        </div>
                                        <div className={`${(coin.market_data.current_price["usd"] - stats.ath) < 0 ? "text-red-600" : "text-green-500"}`}>
                                            {`${(((coin.market_data.current_price["usd"] - stats.ath) / stats.ath) * 100).toFixed(2)} %`}
                                        </div>
                                    </div>
                                    <div className="text-[11px] w-full px-0">
                                        {formatDateString(stats.ath_date)}
                                    </div>

                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="px-0 md:py-2 font-medium  text-[#768396] pr-0">All-Time Low</TableCell>
                            <TableCell className="px-0 md:py-2 flex justify-end">
                                <div className="flex flex-col w-full justify-end px-0">

                                    <div className="flex w-full justify-end gap-x-2">
                                        <div>
                                            {`$${stats.atl}`}
                                        </div>
                                        <div className={`${(coin.market_data.current_price["usd"] - stats.atl) < 0 ? "text-red-600" : "text-green-500"}`}>
                                            {`${(((coin.market_data.current_price["usd"] - stats.atl) / coin.market_data.current_price["usd"]) * 100).toFixed(2)} %`}
                                        </div>
                                    </div>
                                    <div className="text-[11px] flex w-full px-0">
                                        {formatDateString(stats.atl_date)}
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