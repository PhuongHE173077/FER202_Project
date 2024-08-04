import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllUsers } from '../../services/ApiService';

function TableUsers() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetchListUser();
    }, [])
    const fetchListUser = async () => {
        let res = await getAllUsers();
        console.log(res)
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 ? (listUser.map((user, index) => (
                            <tr key={`tabel-list-${index}`}>
                                <td>{index}</td>
                                <td>{user?.username}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    <button className='btn btn-secondary me-md-2'>View</button>
                                    <button className='btn btn-success me-md-2'>Update</button>
                                    <button className='btn btn-danger'>Delete</button>

                                </td>
                            </tr>
                        ))
                        ) : (
                            <tr><td colSpan="4" style={{ textAlign: 'center' }}>not found</td></tr>)
                    }



                </tbody>
            </Table>
        </>

    );
}

export default TableUsers;