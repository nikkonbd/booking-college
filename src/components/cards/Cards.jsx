import React, { useEffect, useState } from 'react';
import CollegeCards from '../collegeCards/CollegeCards';

const Cards = () => {

    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch("/public/college.json")
        .then(res => res.json())
        .then(data => setCollege(data))
    },{})
    // console.log(college);
    return (
        <div>
            <div className='text-center pb-10 pt-16'>
                <h2 className='text-4xl font-medium'>Our College Section</h2>
                <p>Limitless learning, more possibilities</p>
            </div>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6 pb-16'>
            {
                college.map(coll => <CollegeCards key={coll._id} coll={coll}></CollegeCards>)
            }
        </div>
        </div>
    );
};

export default Cards;