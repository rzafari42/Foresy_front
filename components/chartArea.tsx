import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { title } from "process";
import { Line } from "react-chartjs-2";


Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const ChartArea = ({ dataset, labels }: { dataset: {label: string, data: number[]}[], labels: string[] }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
        Legend: {
            labels: {
                font: {
                    size: 12,
                    lineHeight: 2,
                }
            }
        }
    }

    const data = {
        labels,
        datasets:
            dataset.map((data, index) => ({
                fill: true,
                label: data.label,
                data: data.data,
                borderColor: index === 0 ? 'rgba(137, 121, 255, 0.8)' : 'rgba(255, 146, 138, 0.8)',
                backgroundColor: index === 0 ? 'rgba(137, 121, 255, 0.2)' : 'rgba(255, 146, 138, 0.2)',
            })),
    };

    return (
        <Line options={options} data={data} />
    )
}

export default ChartArea;