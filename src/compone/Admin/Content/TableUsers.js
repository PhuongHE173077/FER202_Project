import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllUsers } from '../../services/ApiService';

function TableUsers(props) {
    const { listUser, handleClickUpdate, handleClickDelete } = props
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
                                <td>{index + 1}</td>
                                <td>{user?.username}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    <button className='btn btn-secondary me-md-2'>View</button>
                                    <button onClick={() => handleClickUpdate(user)} className='btn btn-success me-md-2'>Update</button>
                                    <button onClick={() => handleClickDelete(user)} className='btn btn-danger'>Delete</button>

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