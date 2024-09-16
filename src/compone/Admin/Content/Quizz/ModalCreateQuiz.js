import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createNewQuiz } from '../../../services/ApiService';

function ModalCreateQuiz(props) {
    const { showAddQuiz, setShowAdQuiz } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficult, setDiffCult] = useState('EASY');
    const [quizImage, setQuizImage] = useState('');


    const handleUploadFile = (e) => {
        setQuizImage(e.target.files[0])
    }
    const handleSubmit = async () => {
        if (!name || !description || !difficult) {
            toast.error("You must fill in all fields");
            return;
        }
        console.log(name, description, difficult, quizImage)
        let data = await createNewQuiz(name, description, difficult, quizImage);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            setName('');
            setDescription('');
            setDiffCult('');
            setQuizImage('')
        } else {
            toast.error(data.EM)
        }
    }
    const handleClose = () => {
        setShowAdQuiz(false)
    }
    return (
        <>
            <Modal
                size="lg"
                show={showAddQuiz}
                onHide={() => handleClose()}
                aria-labelledby="example-modal-sizes-title-lg"
                className='model-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add QUizz
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className='the-fieldset'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} id="floatingInput" placeholder="Name quiz" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" onChange={e => setDescription(e.target.value)} id="floatingPassword" placeholder="Description" />
                            <label htmlFor="floatingInput">Description</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="file" onChange={(e) => handleUploadFile(e)} className="form-control" id="floatingPassword" placeholder="Quiz Image" />
                            <label htmlFor="floatingInput">Quiz image</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select" id="floatingSelect" onChange={e => setDiffCult(e.target.value)} aria-label="Floating label select example">
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
                            </select>
                            <label htmlFor="floatingSelect">Difficult</label>
                        </div>
                    </fieldset>
                    <Button onClick={() => handleSubmit()}>Add quiz</Button>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalCreateQuiz;