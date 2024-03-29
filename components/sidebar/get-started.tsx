import Portal from "../svg/Portal"
import RightArrow from "../svg/RightArrow"
import { Button } from "../ui/button"

const GetStarted = () => {
    return (
        <div className=" w-full flex flex-col space-y-4 justify-center text-white text-center items-center md:w-3/4 md:px-0 p-5   py-10 bg-[#0052FE] rounded-[16px]">
            <div className="md:hidden flex">
                <Portal />
            </div>
            <div className="font-bold text-[24px] flex justify-center items-center text-align: center;">
                Get Started with KoinX for FREE
            </div>
            <div className="font-medium text-[14px]">
                With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.
            </div>
            <div className="md:flex hidden">
                <Portal />
            </div>
            <div>
                <Button className="bg-white w-full text-black">
                    Get Started for FREE <RightArrow />
                </Button>
            </div>

        </div>
    )
}

export default GetStarted