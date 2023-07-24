import React from 'react';
import { FaMale, FaNetworkWired, FaPhotoVideo, FaReact } from 'react-icons/fa';

const Programs = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='max-w-6xl mx-auto pb-16'>
                <div className='text-center pb-10 pt-16'>
                    <h2 className='text-4xl font-medium'>Our Programs</h2>
                    <p>Explore undergrad and grad programs offered online and on-campus</p>
                </div>
                <div className='grid md:grid-cols-4 gap-6'>
                    <div className='bg-white p-10'>
                        <p className='text-7xl text-[#ffb606]'><FaReact /></p>
                        <h2 className='text-xl font-semibold pb-4 pt-6'>Social Sciences</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className='bg-white p-10'>
                        <p className='text-7xl text-[#ffb606]'><FaMale /></p>
                        <h2 className='text-xl font-semibold pb-4 pt-6'>Personal Education</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className='bg-white p-10'>
                        <p className='text-7xl text-[#ffb606]'><FaNetworkWired /></p>
                        <h2 className='text-xl font-semibold pb-4 pt-6'>Natural Sciences & ICT</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className='bg-white p-10'>
                        <p className='text-7xl text-[#ffb606]'><FaPhotoVideo /></p>
                        <h2 className='text-xl font-semibold pb-4 pt-6'>Maths</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <button className="btn flex mt-6 mx-auto bg-[#ffb606] text-white hover:text-black border-none">Learn More</button>
            </div>
        </div>
    );
};

export default Programs;