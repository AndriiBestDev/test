import Chart from 'chart.js/auto';
import { FC, useEffect, useRef, useState } from 'react';

type ChartData = {
    chartType: string;
    labels: string[];
    datasets: any[];
};

interface BarChartDataInterface {
    params: ChartData;
}

export const BarChart: FC<BarChartDataInterface> = (props) => {
    const { params } = props;
    const [data, setData] = useState<any>({});
    const [chartType, setChartType] = useState<any>('');
    const getSalary = () => {
        const { labels, datasets, chartType } = params;
        setData({
            labels: labels,
            datasets: datasets,
        });
        setChartType(chartType);
    };

    useEffect(() => {
        getSalary();
    }, [params]);

    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let chart: Chart;
        const createChart = () => {
            const ctx = chartRef.current?.getContext('2d');

            if (ctx) {
                if (chart) {
                    chart.destroy(); // Destroy the existing chart
                }

                chart = new Chart(ctx, {
                    type: chartType,
                    data: data,
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                display: false,
                                beginAtZero: true,
                                ticks: {
                                    callback: (value: any) => `${Number(value)}`, // Customize the y-axis label format
                                },
                            },
                            x: {
                                position: 'bottom',
                                barPercentage: 0.2,
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                    plugins: [
                        // @ts-ignore
                        {
                            afterDraw: (chart: any) => {
                                const { ctx, scales } = chart;
                                const xScale = scales.x;
                                const xValue = 0;
                                const xPixel = xScale.getPixelForValue(xValue);
                                ctx.save();
                                ctx.strokeStyle = '#615C55';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(xPixel, chart.chartArea.top);
                                ctx.lineTo(xPixel, chart.chartArea.bottom);
                                // ctx.stroke();
                                ctx.restore();
                            },
                        },
                    ],
                });
            }
        };

        createChart();

        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [data]);

    return <canvas className="w-full min-w-[370px]" ref={chartRef} />;
};
