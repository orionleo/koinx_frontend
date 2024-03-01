import React from "react";
import UpArrow from "../svg/UpArrow";

interface ProgressBarProps {
    value: number;
    start: number;
    end: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, start, end }) => {
    const arrowPosition = `${(value - start) / (end - start) * 100}%`;
    const arrowOffset = -1.5; // Adjust this value to lower or raise the arrow

    return (
        <div className="flex items-center w-full space-x-2">
            <div className="w- flex items-center flex-col justify-center text-center">
                <div>
                    {"Today's Low"}
                </div>
                <div>
                    {start.toFixed(2)}
                </div>
            </div>

            <div className="relative w-[75%] rounded-[10px] h-1 bg-gradient-to-r from-[#FF4949] via-[#FFAF11] via-[48.68%] to-[#11EB68]">
                <div className="absolute h-full w-full">
                    <div className="absolute left-0 top-0 transform -translate-x-[20%] translate-y-1/2" style={{ left: arrowPosition }}>
                        <UpArrow />
                        <span className="block text-center text-xs mt-1">{value}</span>
                    </div>
                </div>
            </div>

            <div className="w flex  items-center flex-col justify-start">
                <div>
                    {"Today's High"}
                </div>
                <div>
                    {end.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;