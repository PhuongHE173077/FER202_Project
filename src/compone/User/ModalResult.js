import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalResult(props) {
    const { isShowResult, setIsShowResult, dataResult } = props;
    const handleClose = () => {

        setIsShowResult(false)
    }
    console.log(dataResult)
    return (
        <Modal show={isShowResult} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>The Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Total question : {dataResult.countTotal}
                </div>
                <div>
                    Total corrrect answer : {dataResult.countCorrect}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Show answer
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalResult;