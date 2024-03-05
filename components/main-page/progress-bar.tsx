import React from "react";
import UpArrow from "../svg/UpArrow";

interface ProgressBarProps {
    value: number;
    start: number;
    end: number;
    type: "day" | "year";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, start, end, type }) => {
    const arrowPosition = `${(value - start) / (end - start) * 100}%`;
    const arrowOffset = -1.5; // Adjust this value to lower or raise the arrow

    return (
        <div className="flex items-center justify-center w-full space-x-4">
            <div className="text-xs md:text-[16px] flex items-center space-y-4 flex-col justify-center text-center">
                <div>
                    {type === "day" ? "Today's Low" : "52W Low"}
                </div>
                <div>
                    {start.toFixed(2)}
                </div>
            </div>

            <div className="relative w-[100%] rounded-[10px] h-1 bg-gradient-to-r from-[#FF4949] via-[#FFAF11] via-[48.68%] to-[#11EB68]">
                {type === "day" && <div className="absolute  flex items-center justify-center h-full w-full">
                    <div className="absolute left-0 top-0 transform -translate-x-[20%] translate-y-1/2" style={{ left: arrowPosition }}>
                        <UpArrow />
                        <span className="flex justify-center items-center w-full text-center text-xs mt-1">{value}</span>
                    </div>
                </div>}
            </div>

            <div className="text-xs md:text-[16px] flex items-center space-y-4 flex-col justify-center text-center">
                <div>
                    {type === "day" ? "Today's High" : "52W High"}
                </div>
                <div>
                    {end.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
