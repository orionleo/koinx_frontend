import { useMemo } from "react";
import * as d3 from "d3";

type DataItem = {
    name: string;
    value: number;
};
type DonutChartProps = {
    width: number;
    height: number;
    data: DataItem[];
};

const MARGIN = 30;

const colors = [
    "#0082FF",
    "#FAA002",
];

const DonutChart = ({ width, height, data }: DonutChartProps) => {
    const radius = Math.min(width, height) / 2 - MARGIN;

    const pie = useMemo(() => {
        const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
        return pieGenerator(data);
    }, [data]);

    const arcs = useMemo(() => {
        const arcPathGenerator = d3.arc();
        return pie.map((p) =>
            arcPathGenerator({
                innerRadius: 120,
                outerRadius: radius,
                startAngle: p.startAngle,
                endAngle: p.endAngle,
            })
        );
    }, [radius, pie]);

    return (
        <svg width={width} height={height} style={{ display: "inline-block" }}>
            <g transform={`translate(${width/4}, ${height / 2})`}>
                {arcs.map((arc, i) => {
                    return <path key={i} d={arc||undefined} fill={colors[i]} />;
                })}
            </g>
        </svg>
    );
};

export default DonutChart