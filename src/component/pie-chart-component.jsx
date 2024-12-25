import React from 'react';
import {Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis} from "recharts";

const PieChartComponent = () => {
    const data = [
        { name: 'wrong', value: 1000 },
        { name: 'correct', value: 1000 },
        { name: 'Total', value: 10000 },
    ];
    const COLORS = ['#fe0026', '#00C49F', '#FFBB28', ];

    return (
        <div>
            <PieChart width={800} height={400}>
                {/* First Pie */}
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
