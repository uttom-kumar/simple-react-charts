import React from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

const RadarChartComponent = () => {
    const data = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];
    return (
        <div className="container">
            <h1>Radar Chart</h1>
            <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RadarChartComponent;