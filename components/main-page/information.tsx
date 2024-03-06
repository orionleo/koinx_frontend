"use client";
import { AllTimeStats, CoinData, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import { Separator } from "../ui/separator";
import Info from "../svg/Info";
import FundamentalsTable from "./fundamentals-table";
import HoldingCoinFirst from "../svg/HoldingCoinFirst";
import { Button } from "../ui/button";
import RightArrow from "../svg/RightArrow";



const Information = ({ coin }: { coin: CoinData }) => {

    return (
        < div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col" >
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">About {coin.name}</div>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[18px]">About {coin.name}</div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[16px]" dangerouslySetInnerHTML={{ __html: coin.description["en"] }}></div>
            </div>
            <Separator />
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Lorem Ipsum</div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-medium text-[16px]"> Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.

                    Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.

                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
            </div>
            <Separator />
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Already holding {coin.name}?</div>
            </div>


            <div className="flex flex-col gap-y-5 md:flex-row justify-start items-center gap-x-2 w-full">
                <div className="flex rounded-[6.65px] w-full md:w-1/2 gap-x-5 p-5 justify-center items-center bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]">
                    <div className="w-1/2">
                        <HoldingCoinFirst />
                    </div>
                    <div className="text-white w-1/2 text-[20px] flex flex-col justify-center items-center">
                        <div>
                            Calculate your profits
                        </div>
                        <Button className="bg-white text-[14px] text-black">
                            Check now <RightArrow />
                        </Button>
                    </div>
                </div>
                <div className="flex rounded-[6.65px] w-full md:w-1/2 gap-x-5 p-5 justify-center items-center bg-gradient-to-r from-[#FF9865] to-[#EF3031]">
                    <div>
                        <HoldingCoinFirst />
                    </div>
                    <div className="text-white text-[20px] flex flex-col justify-center items-center">
                        <div>
                            Calculate your tax liability
                        </div>
                        <Button className="bg-white text-[14px] text-black">
                            Check now <RightArrow />
                        </Button>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="font-medium text-[16px] text-[#3E424A]">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </div>

        </div >

    )
}

export default Information