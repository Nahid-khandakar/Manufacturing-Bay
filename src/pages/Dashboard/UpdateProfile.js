import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const UpdateProfile = () => {

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        if (user) {
            const name = event.target.name.value
            const email = user?.email
            const number = event.target.number.value
            const city = event.target.city.value
            const address = event.target.address.value



            const updateProfile = {
                name: name,
                email: email,
                number: number,
                city: city,
                address: address
            }

            fetch(`http://localhost:5000/userProfile/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(updateProfile)


            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    event.target.reset()
                })
            toast.success('Your Profile Update Successfully')

        }

    }


    return (
        <div>


            <div className="lg:w-2/6 md:w-1/2 bg-base-200 rounded-lg p-8 flex flex-col md:ml-24 w-full my-10">

                <h2 className="text-primary text-lg font-medium title-font mb-5">Update Profile</h2>

                <form onSubmit={handleUpdateProfile}>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" name="name" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" value={user.email} readOnly className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Phone Number</label>
                        <input type="number" name="number" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" name="city" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Address</label>
                        <input type="text" name="address" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <input className='btn btn-primary text-white ' type="submit" value="Update" />

                </form>





            </div>


        </div>
    );
};

export default UpdateProfile;