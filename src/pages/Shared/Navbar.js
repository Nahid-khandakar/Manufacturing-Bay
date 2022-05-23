import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItem = <>

        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>
        <li><Link to='/login'>login</Link></li>
        <li><Link to='/register'>Register</Link></li>
    </>

    return (

        <div className="navbar  bg-gray-300 ">


            <div className="navbar-start">

                {/* for mobile */}
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost text-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-300 rounded-box w-52 text-primary">

                        {navItem}

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-primary text-xl font-bold">Manufacturing Bay</Link>

            </div>

            {/* large scrn menu */}
            <div className="navbar-end hidden lg:flex py-2">

                <ul className="menu menu-horizontal  text-primary uppercase font-semibold">

                    {navItem}

                </ul>

            </div>

        </div>

    );
};

export default Navbar;