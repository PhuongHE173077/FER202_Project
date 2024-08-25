import React, { useState } from 'react';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { CiSquarePlus } from "react-icons/ci";
import { toast } from 'react-toastify';
import '../../../scss/ModalCreateUser.scss';
import { postCreateNewUser } from '../../services/ApiService';

function ModalCreateUser(props) {
    const { lgShow, setLgShow, fetchListUser } = props;
    const [email, setEmail] = useState('');
    const [useName, setUseName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");

    const handleUpLoadImage = (image) => {
        if (image.target && image.target.files && image.target.files[0]) {
            setPreviewImage(URL.createObjectURL(image.target.files[0]))
            setImage(image.target.files[0])
        }
    }

    const handleClose = () => {
        setLgShow(false);
        setEmail("");
        setPassword("");
        setRole("USER");
        setPreviewImage("");
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleCreate = async () => {
        // validate 
        if (!validateEmail(email)) {
            toast.error("invalid email")
            return;
        }
        if (!password) {
            toast.error("Invalid password")
        }

        // submit


        let data = await postCreateNewUser(email, password, useName, role, image);
        console.log("data :", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            fetchListUser();
        } else {
            toast.error(data.EM)
        }
    }


    return (
        <>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => handleClose()}
                aria-labelledby="example-modal-sizes-title-lg"
                className='model-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>user Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="User Name  "
                                onChange={(e) => setUseName(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="Password"
                                onChange={(e) => setPassword(e.target.value)}


                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Role</Form.Label>

                            <Form.Select onChange={(e) => setRole(e.target.value)} >
                                <option value={"USER"}>User</option>
                                <option value={"ADMIN"}>Admin</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ display: 'flex', padding: "3px 5px", maxWidth: "130px", alignItems: 'center', cursor: 'pointer', borderRadius: '5px', border: '1px solid red' }} htmlFor='labelUpload'><CiSquarePlus color='green' /> Upload file </Form.Label>
                            <Form.Control
                                type="file" hidden
                                id='labelUpload'
                                onChange={e => handleUpLoadImage(e)}
                            />
                        </Form.Group>
                        <Form.Group className='imagePreview'>
                            {
                                previewImage ?
                                    <Image src={previewImage} />
                                    :
                                    <span>Preview Image</span>

                            }


                        </Form.Group>
                        <Button style={{ marginTop: '10px' }} onClick={() => handleCreate()}> Save </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCreateUser;