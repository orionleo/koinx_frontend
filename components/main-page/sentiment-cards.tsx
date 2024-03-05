import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import SentimentFirst from "../svg/SentimentFirst"
import SentimentSecond from "../svg/SentimentSecond"

export default function SentimentCards() {
    return (
        <div className="w-full justify-start ml-[50px] items-center flex">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[80%]"
            >
                <CarouselContent className="w-full">

                    <CarouselItem className="basis-[80%]">
                        <div className="p-1">
                            <Card className=" bg-[#E8F4FD] w-full rounded-[8px]">
                                <CardContent className="flex rounded-[8px] bg-[#E8F4FD] gap-x-2 md:h-[204px] h-full w-full py-6 px-2">

                                    <div>

                                        <SentimentFirst />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-medium md:text-[20px] text-[12px]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>

                                        <div className="md:text-[14px] text-[10px] font-normal">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" md:w-[456px] basis-[80%]">
                        <div className="p-1">
                            <Card className="bg-[#EBF9F4] w-full rounded-[8px]">
                                <CardContent className="flex bg-[#EBF9F4] rounded-[8px] gap-x-2 md:h-[204px] h-full w-full py-6 px-2">
                                    <div>

                                        <SentimentSecond />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-medium md:text-[20px] text-[12px]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>

                                        <div className="md:text-[14px] text-[10px] font-normal">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
