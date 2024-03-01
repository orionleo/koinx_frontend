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

import { Card, CardContent } from "@/components/ui/card"
import TeamImage from "../svg/TeamImage";



const Team = () => {

    return (
        < div className="w-full bg-white rounded-[8px] px-4 py-6 gap-y-6 flex flex-col" >
            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[24px]">Team</div>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <div className="font-semibold text-[16px] text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</div>
            </div>
            <div className="flex flex-col p-5 justify-start left-0 items-center w-full ">
                <Card className="w-full flex-col space-y-5 flex justify-start">
                    <CardContent className="w-full flex justify-start bg-[#E8F4FD]">
                        <div className="w-full  p-5 rounded-[7.46px] justify-start flex ">
                            <div className="w-full flex flex-col justify-center ">

                                <TeamImage />
                                <div className="w-full justify-center items-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full justify-start items-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati rem est eveniet eius iusto omnis dignissimos debitis reiciendis totam doloremque, maiores, id voluptatem doloribus voluptates esse sapiente veniam vero.
                                Itaque dolorum magni aperiam ab veritatis alias tempora asperiores animi excepturi? Magnam laudantium velit nihil, excepturi asperiores recusandae eveniet fugiat beatae dolorum odit molestiae laborum qui. Repudiandae consectetur id alias.
                            </div>
                        </div>
                    </CardContent>
                    <CardContent className="w-full flex justify-start bg-[#E8F4FD]">
                        <div className="w-full  p-5 rounded-[7.46px] justify-start flex ">
                            <div className="w-full flex flex-col justify-center ">

                                <TeamImage />
                                <div className="w-full justify-center items-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full justify-start items-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati rem est eveniet eius iusto omnis dignissimos debitis reiciendis totam doloremque, maiores, id voluptatem doloribus voluptates esse sapiente veniam vero.
                                Itaque dolorum magni aperiam ab veritatis alias tempora asperiores animi excepturi? Magnam laudantium velit nihil, excepturi asperiores recusandae eveniet fugiat beatae dolorum odit molestiae laborum qui. Repudiandae consectetur id alias.
                            </div>
                        </div>
                    </CardContent>
                    <CardContent className="w-full flex justify-start bg-[#E8F4FD]">
                        <div className="w-full  p-5 rounded-[7.46px] justify-start flex ">
                            <div className="w-full flex flex-col justify-center ">

                                <TeamImage />
                                <div className="w-full justify-center items-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full justify-start items-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati rem est eveniet eius iusto omnis dignissimos debitis reiciendis totam doloremque, maiores, id voluptatem doloribus voluptates esse sapiente veniam vero.
                                Itaque dolorum magni aperiam ab veritatis alias tempora asperiores animi excepturi? Magnam laudantium velit nihil, excepturi asperiores recusandae eveniet fugiat beatae dolorum odit molestiae laborum qui. Repudiandae consectetur id alias.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div >

    )
}

export default Team