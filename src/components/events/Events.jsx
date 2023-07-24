import React from 'react';
import { FaClock, FaLocationArrow } from 'react-icons/fa';

const Events = () => {
    return (
        <div className='max-w-6xl mx-auto my-16 events'>
            <div className='flex justify-between items-center'>
                <div>
                <h2 className='text-4xl font-medium'>Events</h2>
                <p>Upcoming Education Events to feed your brain.</p>                        
                </div>
                <button className='btn btn-outline'>View All</button>
            </div>
            <div className='md:flex justify-evenly gap-16 pt-10'>
                <div>
                    <h2 className='text-6xl font-semibold text-[#ffb606]'>30</h2>
                    <p>September</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Autumn Science Lectures</h2>
                    <div className='flex gap-4 pt-3'>
                        <div className='flex gap-2 items-center'>
                        <p className='text-[#ffb606]'><FaClock></FaClock></p>
                        <p>08:00 - 17:00</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <p className='text-[#ffb606]'><FaLocationArrow></FaLocationArrow></p>
                        <p>LONDON, UK</p>
                        </div>
                    </div>
                    <p className='pt-4'>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat</p>
                </div>
                <div>
                    <img src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-7-450x233.jpg" alt="" />
                </div>
            </div>
            <div className='md:flex justify-evenly gap-16 pt-10'>
                <div>
                    <h2 className='text-6xl font-semibold text-[#ffb606]'>15</h2>
                    <p>November</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Autumn Science Lectures</h2>
                    <div className='flex gap-4 pt-3'>
                        <div className='flex gap-2 items-center'>
                        <p className='text-[#ffb606]'><FaClock></FaClock></p>
                        <p>08:00 - 17:00</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <p className='text-[#ffb606]'><FaLocationArrow></FaLocationArrow></p>
                        <p>LONDON, UK</p>
                        </div>
                    </div>
                    <p className='pt-4'>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat</p>
                </div>
                <div>
                    <img src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-1-450x233.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Events;