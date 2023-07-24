import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCards = ({coll}) => {
    // console.log(coll);
    const {_id, college_picture, college_name, research_history, admission_dates, events, sports} = coll;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[500px] h-[260px]' src={college_picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <p>{research_history}</p>
                    <p><strong>Admission Dates: </strong>{admission_dates}</p>
                    <p><strong>Events: </strong>{events}</p>
                    <p><strong>Sports: </strong>{sports}</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-[#ffb606] text-white hover:text-black"><Link to={`/${_id}`}>Details</Link></button>
                    {/* <button className="btn bg-[#ffb606] text-white hover:text-black"><Link to={`/${_id}`}>Details</Link></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCards;