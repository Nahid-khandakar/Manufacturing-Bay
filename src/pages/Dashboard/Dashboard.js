import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hook/useAdmin';
import auth from '../../firebase.init';


const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
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



                        <li className='uppercase font-bold'><Link to='/dashboard'>My Profile</Link></li>


                        {
                            !admin && <>
                                <li className='uppercase font-bold'><Link to='/dashboard/myorder'>My Order</Link></li>
                                <li className='uppercase font-bold'><Link to='/dashboard/addreview'>Add Review</Link></li>
                            </>
                        }



                        {
                            admin && <>
                                <li className='uppercase font-bold'><Link to='/dashboard/users'>Make Admin</Link></li>
                                <li className='uppercase font-bold'><Link to='/dashboard/addProduct'>Add Parts</Link></li>
                                <li className='uppercase font-bold'><Link to='/dashboard/manageProduct'>Manage Parts</Link></li>
                                <li className='uppercase font-bold'><Link to='/dashboard/manageAllOrders'>Manage Orders</Link></li>
                            </>
                        }






                    </ul>

                </div>


            </div>


        </div>
    );
};

export default Dashboard;