import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    // console.log(user)
    // console.log(user.email)

    const [userProfile, setUserProfile] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/userProfile/?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUserProfile(data))

    }, [user])



    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>

            <section className="body-font">
                <div className="container px-5 py-14 mx-auto flex flex-col">


                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-10">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">

                                <div className="avatar">
                                    <div className="w-32 rounded">
                                        <img src="https://api.lorem.space/image/face?hash=88560" />
                                    </div>
                                </div>


                            </div>


                            <div className="flex flex-col items-center text-center justify-center">
                                <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            </div>

                        </div>


                        <div className="sm:w-2/3 sm:pl-2 sm:py-0 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">


                            <div>
                                <p className="leading-relaxed text-lg mb-4">{userProfile?.name}</p>
                                <p className="leading-relaxed text-lg mb-4">{userProfile?.email}</p>
                                <p className="leading-relaxed text-lg mb-4">{userProfile?.number}</p>
                                <p className="leading-relaxed text-lg mb-4">{userProfile?.city}</p>
                                <p className="leading-relaxed text-lg mb-4">{userProfile?.address}</p>


                                <Link to="/dashboard/updateprofile" className='btn btn-sm btn-primary text-white'>Update Profile</Link>
                            </div>


                        </div>
                    </div>



                </div>
            </section>


        </div>
    );
};

export default MyProfile;