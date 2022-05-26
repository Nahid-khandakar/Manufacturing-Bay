import React from 'react';

const UpdateProfile = () => {

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const number = event.target.number.value
        const city = event.target.city.value
        const address = event.target.address.value

        console.log(name, email, number, city, address)
    }


    return (
        <div>


            <div class="lg:w-2/6 md:w-1/2 bg-base-200 rounded-lg p-8 flex flex-col md:ml-24 w-full my-10">

                <h2 class="text-primary text-lg font-medium title-font mb-5">Update Profile</h2>

                <form onSubmit={handleUpdateProfile}>

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" name="name" class="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" name="email" class="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Phone Number</label>
                        <input type="number" name="number" class="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" name="city" class="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Address</label>
                        <input type="text" name="address" class="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <input className='btn btn-primary text-white ' type="submit" value="Update" />

                </form>





            </div>


        </div>
    );
};

export default UpdateProfile;