import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const { data: userProfile, isLoading } = useQuery('userProfile', () =>
        fetch(`http://localhost:5000/userProfile/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>

            <section class="body-font">
                <div class="container px-5 py-14 mx-auto flex flex-col">


                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-10">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">

                                <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img src="https://api.lorem.space/image/face?hash=88560" />
                                    </div>
                                </div>


                            </div>


                            <div class="flex flex-col items-center text-center justify-center">
                                <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            </div>

                        </div>


                        <div class="sm:w-2/3 sm:pl-2 sm:py-0 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4">{userProfile?.name}</p>
                            <p class="leading-relaxed text-lg mb-4">{userProfile?.email}</p>
                            <p class="leading-relaxed text-lg mb-4">{userProfile?.number}</p>
                            <p class="leading-relaxed text-lg mb-4">{userProfile?.city}</p>
                            <p class="leading-relaxed text-lg mb-4">{userProfile?.address}</p>


                            <Link to="/dashboard/updateprofile" className='btn btn-sm btn-primary text-white'>Update Profile</Link>
                        </div>
                    </div>



                </div>
            </section>


        </div>
    );
};

export default MyProfile;