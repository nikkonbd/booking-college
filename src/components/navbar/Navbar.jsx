import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItem = <>
        <li className='text-[16px]'><Link to={'/'}>Home</Link></li>
        <li className='text-[16px]'><Link to={'/colleges'}>Colleges</Link></li>
        <li className='text-[16px]'><Link to={'/admission'}>Admission</Link></li>
        <li className='text-[16px]'><Link to={'/myCollege'}>My College</Link></li>
        {
            user ? <li className='text-[16px]'><Link onClick={handleLogOut}>Logout</Link></li> : <li className='text-[16px]'><Link to={'/login'}>Login</Link></li>
        }
    </>
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                    </div>
                    <img className='w-16' src="/src/assets/logo.png" alt="" />
                    <a className="text-[16px] md:text-3xl text-[#ffb606] font-semibold uppercase">PC CLG</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                <input type="text" placeholder="Search here college" className="input input-bordered input-md w-full max-w-[240px]" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;