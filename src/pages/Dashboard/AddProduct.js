import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProdcuct = (event) => {

        event.preventDefault();


        const name = event.target.name.value
        const image = event.target.image.value
        const description = event.target.description.value
        const available = event.target.available.value
        const minimum = event.target.minimum.value
        const price = event.target.price.value

        console.log(name, image, description, available, minimum, price)

        const partsDetails = {
            name: name,
            image: image,
            description: description,
            availableQuantity: available,
            minimumQuantity: minimum,
            price: price

        }

        fetch("https://pacific-citadel-88310.herokuapp.com/parts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(partsDetails)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })
        toast.success('parts details save successfully')

    }

    return (
        <div>


            <div className="lg:w-2/6 md:w-1/2 bg-base-200 rounded-lg p-8 flex flex-col md:ml-24 w-full my-6">

                <h2 className="text-primary text-lg font-medium title-font mb-5">Add a Parts </h2>

                <form onSubmit={handleAddProdcuct}>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Parts Name</label>
                        <input type="text" name="name" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Image</label>
                        <input type="text" name='image' className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Description</label>

                        <textarea name="description" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required></textarea>

                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Available Quantity</label>
                        <input type="number" name="available" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Minimum Quantity</label>
                        <input type="number" name="minimum" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Price</label>
                        <input type="number" name="price" className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 " required />
                    </div>

                    <input className='btn btn-primary text-white ' type="submit" value="ADD" />

                </form>





            </div>


        </div>
    );
};

export default AddProduct;