import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {

    const { data: parts, isLoading, refetch } = useQuery('parts', () =>
        fetch("http://localhost:5000/parts").then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Price</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            parts.map((part, index) =>
                                <ManageProductTable
                                    key={part._id}
                                    part={part}
                                    index={index}
                                    refetch={refetch}
                                >

                                </ManageProductTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;