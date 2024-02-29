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

                    <CarouselItem className="basis-[70%]">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex bg-[#E8F4FD] gap-x-2  w-full aspect-square p-6">
                                    <div>

                                        <SentimentFirst />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-medium text-[20px]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>

                                        <div className="text-[14px] font-normal">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-[70%]">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex bg-[#EBF9F4] gap-x-2  w-full aspect-square p-6">
                                    <div>

                                        <SentimentSecond />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-medium text-[20px]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>

                                        <div className="text-[14px] font-normal">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
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
