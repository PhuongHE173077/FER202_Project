import React, { useState } from 'react';
import ModalCreateUser from './ModalCreateUser';
import { Button } from 'react-bootstrap';
import TableUsers from './TableUsers';

function ManageUser(props) {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div className='manage-use-container'>
            <div className='title'>
                Manage User
            </div>
            <div>
                <Button onClick={() => setLgShow(true)}>Add User</Button>
            </div>
            <div>
                <ModalCreateUser lgShow={lgShow} setLgShow={setLgShow} />
            </div>
            <div >
                <TableUsers />
            </div>
        </div>
    );
}

export default ManageUser;