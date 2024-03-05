import { CoinData } from "@/constants/interfaces";
import Image from "next/image";
import ProfitLossArrow from "../svg/ProfitLossArrow";
import Chart from "./chart";
import { Separator } from "../ui/separator";


const BasicInfo = ({ coin }: { coin: CoinData }) => {
    const isProfit = coin.market_data.price_change_24h > 0;
    return (
        <div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col">
            <div className="flex justify-start items-center gap-x-2">
                <Image src={coin.image.large} width={36} height={36} alt="thumbnail" />
                <div className="font-semibold text-[24px]">{coin.name}</div>
                <div className="font-semibold text-[16px] text-[#5D667B]">{coin.symbol.toUpperCase()}</div>
                <div className="font-medium rounded-[8px] text-white bg-[#768396] text-[16px] px-4 py-2">{`Rank #${coin.market_cap_rank}`}</div>
            </div>
            <div className="flex flex-col  gap-x-10">
                <div className="flex items-center justify-start gap-x-10">

                    <div className="font-semibold text-[28px]">{`$${coin.market_data.current_price["usd"]}`}</div>

                    <div className={`flex gap-x-3 justify-center items-center w-[90px] text-[16px] font-medium ${isProfit ? "text-[#14B079] bg-[#EBF9F4]" : "text-red-600 bg-red-100"} p-2 rounded-[4px]`}>
                        <ProfitLossArrow profit={isProfit} />
                        {`${coin.market_data.price_change_percentage_24h.toFixed(2)}%`}
                    </div>
                    <div className="font-medium">
                        {"(24H)"}
                    </div>
                </div>
                <div className="text-[14px] font-medium text-[#768396]">
                    ₹ {coin.market_data.current_price["inr"]}
                </div>
            </div>
            <Separator />
            <div className="">
                <div className="font-semibold text-[16px] mb-[10px]">
                    Bitcoin Price Chart (USD)
                </div>
                <Chart coinSymbol={"eth"} />
            </div>
        </div>
    )
}

export default BasicInfo