import DonutChart from "./donut-chart";

const data = [
    { name: "Crowdsale investors", value: 80 },
    { name: "Foundation", value: 20 }
]

const Donut = ({ width = 700, height = 400 }) => (
    <DonutChart data={data} width={width} height={height} />
);

export default Donut;