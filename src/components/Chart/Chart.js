import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Assignment 1',
            mark: 50,
        },
        {
            name: 'Assignment 2',
            mark: 50,
        },
        {
            name: 'Assignment 3',
            mark: 60,
        },
        {
            name: 'Assignment 4',
            mark: 60,
        },
        {
            name: 'Assignment 5',
            mark: 48,
        },
        {
            name: 'Assignment 6',
            mark: 60,
        },
        {
            name: 'Assignment 7',
            mark: 60,
        },
        {
            name: 'Assignment 8',
            mark: 59,
        },
        {
            name: 'Assignment 9',
            mark: 54,
        },
        {
            name: 'Assignment 10',
            mark: 50,
        },
        {
            name: 'Assignment 11',
            mark: 26,
        },
        {
            name: 'Assignment 12',
            mark: 28,
        },
    ];

    return (
        <div>
             <PieChart width={400} height={400}>
                <Pie
                    dataKey="mark"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Chart;