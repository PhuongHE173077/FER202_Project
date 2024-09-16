import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import "../../../../scss/ManageQuiz.scss";
import { getAllQuizForAdmin } from '../../../services/ApiService';
import ModalCreateQuiz from './ModalCreateQuiz';
import TableQuiz from './TableQuiz';

function ManageQuiz(props) {
    const [showAddQuiz, setShowAdQuiz] = useState(false);
    const [listQuiz, setListQuiz] = useState([]);
    useEffect(() => {
        fetchQuiz();
    }, [])
    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        } else {
            alert(res.EM)
        }
    }

    return (
        <div className='quiz-container'>
            <div className='title'>
                <h4>Manage Quizs</h4>
            </div>

            <div className='quiz-content'>
                <div className='title'>
                    <Button onClick={() => setShowAdQuiz(true)}>Add Quiz</Button>
                </div>
                <TableQuiz listQuiz={listQuiz} />
                <ModalCreateQuiz showAddQuiz={showAddQuiz} setShowAdQuiz={setShowAdQuiz} />
            </div>

        </div>
    );
}

export default ManageQuiz;