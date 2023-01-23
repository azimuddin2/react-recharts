import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const SkillChart = () => {
    const data = [
        {
            name: 'HTML',
            skill: 98,
        },
        {
            name: 'CSS',
            skill: 90,
        },
        {
            name: 'Bootstrap',
            skill: 96,
        },
        {
            name: 'Tailwind CSS',
            skill: 92,
        },
        {
            name: 'JavaScript',
            skill: 80,
        },
        {
            name: 'React.js',
            skill: 85,
        },
        {
            name: 'Material UI',
            skill: 70,
        },
        {
            name: 'Firebase',
            skill: 88,
        },
        {
            name: 'Node.js',
            skill: 80,
        },
        {
            name: 'Express.js',
            skill: 82,
        },
        {
            name: 'MongoDB',
            skill: 90,
        },
        {
            name: 'Git-Github',
            skill: 95,
        },
    ];

    return (
        <div>
            <BarChart
                width={1200}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="skill" fill="#82ca9d" />
                <Line type="monotone" dataKey="skill" stroke="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default SkillChart;