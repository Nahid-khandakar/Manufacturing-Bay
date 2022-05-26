import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {

    const { data: parts, isLoading, refetch } = useQuery('parts', () =>
        fetch("https://pacific-citadel-88310.herokuapp.com/parts").then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table w-full">

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