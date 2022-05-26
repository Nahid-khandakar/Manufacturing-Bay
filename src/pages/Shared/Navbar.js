import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const Navbar = () => {

    const [user, loading] = useAuthState(auth);
    //console.log(user)



    const handleSignOut = () => {
        signOut(auth)
    }

    const navItem = <>

        <li><Link to='/home'>Home</Link></li>

        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }


        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>


        {
            user ?
                <div className="dropdown dropdown-end">
                    <div className='flex'>
                        <h2 className='mt-3 mr-3'>{user?.displayName}</h2>

                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar mr-4">
                            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                {
                                    user.photoURL
                                        ?
                                        <img src={user.photoURL} alt='user' />
                                        :
                                        <img src="https://api.lorem.space/image/face?hash=33791" alt='unknown' />
                                }
                            </div>
                        </label>
                    </div>


                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 py-2 px-4 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <button className='btn btn-ghost mx-auto' onClick={handleSignOut}>Log out</button>
                        </li>
                    </ul>
                </div>
                :
                <li><Link to='/login'>login</Link></li>
        }



    </>

    if (loading) {
        return <Loading></Loading>
    }

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