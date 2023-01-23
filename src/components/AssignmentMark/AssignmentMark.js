import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AssignmentMark = () => {
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
            <LineChart width={800} height={300} data={data}>
                <Line type="monotone" dataKey="mark" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default AssignmentMark;