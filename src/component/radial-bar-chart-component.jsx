import React from 'react';
import {Legend, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

const RadialBarChartComponent = () => {
    // Sample data for the RadialBarChart
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 8.63,
            pv: 3908,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: 'unknown',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ];

    // Styling for the legend
    const style = {
        top: 0,
        left: 350,
        lineHeight: '24px',
    };

    return (
        <div>
            <div className="container">
                <h1>Radial Bar Chart</h1>
                <div style={{ width: "100%", height: "300px" }}>
                    <ResponsiveContainer>
                        <RadialBarChart
                            cx="50%"
                            cy="50%"
                            innerRadius="10%"
                            outerRadius="80%"
                            barSize={10}
                            data={data}
                        >
                            <RadialBar
                                minAngle={15}
                                label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                clockWise
                                dataKey="uv"
                            />
                            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default RadialBarChartComponent;
