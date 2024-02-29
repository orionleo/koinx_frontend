"use client";
import { AllTimeStats, CoinData, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import { Separator } from "../ui/separator";
import ProgressBar from "./progress-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../svg/Info";
import FundamentalsTable from "./fundamentals-table";



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


            <div className="flex flex-col md:flex-row justify-start items-center gap-x-2">
                <div>
                <div className="bg-gradient-to-r from-[#79F1] to-[#1B4AEF]"></div>
                <div></div>
                </div>
                <div></div>
            </div>

        </div >

    )
}

export default Information