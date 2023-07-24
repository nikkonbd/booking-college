import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaPinterest, FaTwitter, FaVoicemail,  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#272727]'>
            <footer className="footer footer-section py-20 md:max-w-6xl mx-auto text-base-content">
            <div className='text-[#868686]'>
                <div className='flex items-center'>
                    <img className='w-[90px]' src="/src/assets/logo.png" alt="" />
                    <h2 className='text-3xl text-[#ffffff]'>PC COLLEGE</h2>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffb606]'><FaPhone /></p>
                    <p>800 388 80 90</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffb606]'><FaLocationArrow /></p>
                    <p>58 Howard Street #2 San Francisco</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffb606]'><FaVoicemail /></p>
                    <p>contact@edupc.com</p>
                </div>
                <p className='text-[#868686]'>PC College Ltd.<br/>Providing reliable tech since 2023</p>
                <div className='flex gap-3 text-2xl text-white pt-4'>
                    <p className='hover:text-[#ffb606] cursor-pointer'><FaFacebook /></p>
                    <p className='hover:text-[#ffb606] cursor-pointer'><FaTwitter /></p>
                    <p className='hover:text-[#ffb606] cursor-pointer'><FaPinterest /></p>
                    <p className='hover:text-[#ffb606] cursor-pointer'><FaInstagram /></p>
                </div>
            </div> 
            <div className='text-[#868686]'>
                <span className="footer-title text-[#ffffff]">Services</span> 
                <a className="link link-hover">Branding</a> 
                <a className="link link-hover">Design</a> 
                <a className="link link-hover">Marketing</a> 
                <a className="link link-hover">Advertisement</a>
            </div> 
            <div className='text-[#868686]'>
                <span className="footer-title text-[#ffffff]">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
            </div> 
            <div className='text-[#868686]'>
                <span className="footer-title text-[#ffffff]">Legal</span> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
            </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by PC College Ltd</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;