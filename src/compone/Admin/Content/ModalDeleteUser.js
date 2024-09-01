import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { deleteUsers } from '../../services/ApiService';
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
    const { showModalDelete, setShowModalDelete, dataUpdate } = props;
    const handleClose = () => {
        setShowModalDelete(false)
    }

    const handleDeteleUser = async () => {
        let data = await deleteUsers(dataUpdate.id);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            props.fetchListUser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }

    }

    return (
        <Modal show={showModalDelete} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete {dataUpdate?.email}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDeteleUser}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteUser;