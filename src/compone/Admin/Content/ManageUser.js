import React, { useEffect, useState } from 'react';
import ModalCreateUser from './ModalCreateUser';
import { Button } from 'react-bootstrap';
import TableUsers from './TableUsers';
import { getAllUsers } from '../../services/ApiService';
import ModalUpdateUSer from './ModalUpdateUser';



function ManageUser(props) {
    const [lgShow, setLgShow] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [showModalUpdate, setShowModalUpadte] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
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
    const handleClickUpdate = (user) => {
        setShowModalUpadte(true);
        setDataUpdate(user)
    }

    return (
        <div className='manage-use-container'>
            <div className='title'>
                Manage User
            </div>
            <div>
                <Button onClick={() => setLgShow(true)}>Add User</Button>
            </div>
            <div>
                <ModalCreateUser lgShow={lgShow} setLgShow={setLgShow} fetchListUser={fetchListUser} />
            </div>
            <div >
                <TableUsers listUser={listUser} handleClickUpdate={handleClickUpdate} />
            </div>
            <div>
                <ModalUpdateUSer showModalUpdate={showModalUpdate} setShowModalUpadte={setShowModalUpadte} dataUpdate={dataUpdate} fetchListUser={fetchListUser} />
            </div>
        </div>
    );
}

export default ManageUser;