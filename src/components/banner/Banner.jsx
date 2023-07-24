import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2022/12/bg-slide-1-new-1.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[600px]">
                    <h1 className="mb-5 text-5xl font-bold">Booking Education College</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-[#ffb606] text-white hover:text-black border-none">Get Learning</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;