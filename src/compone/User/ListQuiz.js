import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getQuizData } from '../services/ApiService';
import "../../scss/Quiz.scss"
import { Link, useNavigate } from 'react-router-dom';

function ListQuiz(props) {
    const [arrQuiz, setArrQuiz] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        getQuiz()
    }, [])
    const getQuiz = async () => {
        const res = await getQuizData();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT)
        }
    }
    return (
        <div className='quizz-container container'>
            {arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((quizz, index) => (
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={`data:image/png;base64,${quizz.image}`} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{index + 1}</h5>
                            <p className="card-text">{quizz?.description}</p>
                            <button onClick={() => nav(`/quizz/${quizz.id}`, { state: { quizzDes: quizz.description } })} className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                ))}

            {arrQuiz && arrQuiz.length === 0 &&
                <div>You don't have quizz</div>}





        </div>
    );
}

export default ListQuiz;