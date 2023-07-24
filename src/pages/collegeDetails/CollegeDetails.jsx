import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegeDetails = () => {

    const details = useLoaderData();
    const data = useParams();
    console.log(data.college_name);

    const {college_name} = details;
    console.log(college_name);
    return (
        <div>
            <h2>details</h2>
        </div>
    );
};

export default CollegeDetails;