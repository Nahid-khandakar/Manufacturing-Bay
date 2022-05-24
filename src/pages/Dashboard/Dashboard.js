import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div>

            <div className="drawer drawer-mobile">


                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h3 className='text-3xl text-secondary font-bold my-3'>Dashboard</h3>
                    <hr />
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary text-white drawer-button lg:hidden">
                        <FaArrowRight />
                    </label>
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu px-6 py-12 overflow-y-auto w-80 bg-base-100 text-base-content">


                        <li className='uppercase font-bold'><Link to='/dashboard'>My order</Link></li>
                        <li className='uppercase font-bold'><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li className='uppercase font-bold'><Link to='/dashboard/myprofile'>My Profile</Link></li>


                    </ul>

                </div>


            </div>


        </div>
    );
};

export default Dashboard;