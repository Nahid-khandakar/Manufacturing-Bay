import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ index, user, refetch }) => {

    const { email, role } = user


    const makeAdmin = () => {
        fetch(`https://pacific-citadel-88310.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('error')
                }
                res.json()
            })


            .then(data => {
                //console.log(data)
                //there is a error in modify count
                if (data) {
                    console.log(data)
                    toast.success('successfully made an admin')
                    refetch()
                }


            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-warning text-white">
                        Make Admin
                    </button>
                }
            </td>
        </tr>
    );
};

export default UserTable;