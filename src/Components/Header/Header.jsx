import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-7xl'>
            <div className="navbar  mb-8 pt-8 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl text-black font-semibold">
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                        <li><a>Applied Job</a></li>

                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <a className="font-semibold text-4xl">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><a>Applied Job</a></li>

                    <li><a>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-xl">Start Applying</a>
            </div>
        </div>
        </div>
    );
};

export default Header;