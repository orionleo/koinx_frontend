import { Card, CardContent } from "@/components/ui/card"

import Image from "next/image";



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
                <Card className="w-full flex-col gap-y-5 flex justify-start">
                    <CardContent className="w-full rounded-[8px] flex md:flex-row flex-col justify-start bg-[#E8F4FD]">
                        <div className="w-full md:flex-row flex-col justify-center items-cetner  p-5 rounded-[7.46px] md:justify-start flex ">
                            <div className="w-full flex flex-col justify-center items-center ">

                                <Image src={"/image.png"} alt="profile pic" width={101} height={105} className="rounded-[8px]" />
                                <div className="w-full text-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full text-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                            </div>
                        </div>
                    </CardContent>
                    <CardContent className="w-full rounded-[8px] flex md:flex-row flex-col justify-start bg-[#E8F4FD]">
                        <div className="w-full md:flex-row flex-col justify-center items-cetner  p-5 rounded-[7.46px] md:justify-start flex ">
                            <div className="w-full flex flex-col justify-center items-center ">

                                <Image src={"/image.png"} alt="profile pic" width={101} height={105} className="rounded-[8px]" />
                                <div className="w-full text-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full text-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                            </div>
                        </div>
                    </CardContent>
                    <CardContent className="w-full rounded-[8px] flex md:flex-row flex-col justify-start bg-[#E8F4FD]">
                        <div className="w-full md:flex-row flex-col justify-center items-cetner  p-5 rounded-[7.46px] md:justify-start flex ">
                            <div className="w-full flex flex-col justify-center items-center ">

                                <Image src={"/image.png"} alt="profile pic" width={101} height={105} className="rounded-[8px]" />
                                <div className="w-full text-center font-semibold text-[16px]">
                                    John Smith
                                </div>
                                <div className="w-full text-center font-medium text-[12px] text-[#788F9B]">
                                    Designation Here
                                </div>
                            </div>
                            <div className="text-[14px]  text-[#0F1629] font-normal">

                                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div >

    )
}

export default Team