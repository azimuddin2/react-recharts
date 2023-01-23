import React from 'react';
import AssignmentMark from '../AssignmentMark/AssignmentMark';
import Chart from '../Chart/Chart';
import SkillChart from '../SkillChart/SkillChart';

const StudentAnalytics = () => {
    return (
        <div>
            <AssignmentMark></AssignmentMark>
            <Chart></Chart>
            <SkillChart></SkillChart>
        </div>
    );
};

export default StudentAnalytics;