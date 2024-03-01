"use client";
import { AllTimeStats, CoinData, MarketData, Stats, WeekStats, YearStats } from "@/constants/interfaces";
import { Separator } from "../ui/separator";
import ProgressBar from "./progress-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../svg/Info";
import FundamentalsTable from "./fundamentals-table";
import HoldingCoinFirst from "../svg/HoldingCoinFirst";
import { Button } from "../ui/button";
import RightArrow from "../svg/RightArrow";
import Donut from "../donut-chart/donut";



const Tokenomics = () => {

    return (
        < div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col" >
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Tokenomics</div>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[18px]">Initial Distribution</div>
            </div>
            <div className="flex justify-start left-0 items-center w-full ">
                <Donut />
                <div className="flex justify-start flex-col space-y-10 w-full">

                    <div className="flex justify-start items-center space-x-2 w-full -translate-y-10">
                        <div className="w-[12px] h-[12px] bg-[#0082FF] rounded-full" />
                        <div>
                            Crowdsale investors: 80%
                        </div>
                    </div>
                    <div className="flex justify-start items-center space-x-2 w-full -translate-y-10">
                        <div className="w-[12px] h-[12px] bg-[#FAA002] rounded-full" />
                        <div>
                            Foundation: 20%
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[16px] text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </div>
        </div >

    )
}

export default Tokenomics