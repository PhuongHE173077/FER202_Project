import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getQuestionByQuizId, postSubmitQuiz } from '../services/ApiService';
import _ from 'lodash';
import '../../scss/QuizDetail.scss'
import Question from './Question';
import ModalResult from './ModalResult';

function ListQuizDetail(props) {
    const param = useParams();
    const quizId = param.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [isShowResult, setIsShowResult] = useState(false);
    const [dataResult, setDataResult] = useState({});

    useEffect(() => {
        fetchQuestion();
    }, [quizId])
    const fetchQuestion = async () => {
        let res = await getQuestionByQuizId(quizId);
        // console.log('checck res', res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answer = [];
                    let image;
                    let description;
                    value.forEach((item) => {
                        item.answers.isSelected = false;
                        answer.push(item.answers)
                        if (index === 0) {
                            image = item.image;
                            description = item.description;
                        }
                    })
                    return { questionID: key, answers: answer, image, description }
                })
                .value()
            setDataQuiz(data)
        }
    }
    // console.log('check data quiz', dataQuiz)
    const handleCheckBox = (aId, qId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionID === +qId)
        // console.log(question, aId)
        if (question && question.answers) {
            let a = question.answers.map((item) => {
                if (+item.id === +aId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })

            question.answers = a;
        }
        let index = dataQuizClone.findIndex(item => +item.questionID === +qId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone)
        }
    }
    const handleFinishQuizz = async () => {
        console.log('check data before submit: ', dataQuiz)
        let payload = {
            quizId: +quizId,
            answers: []
        }
        let answers = [];
        dataQuiz.forEach(item => {
            let questionId = item.questionID;
            let userAnswerId = [];
            item.answers.forEach(as => {
                if (as.isSelected === true) {
                    userAnswerId.push(as.id)
                }
            })
            answers.push({
                questionId: +questionId,
                userAnswerId: userAnswerId
            })
        })
        payload.answers = answers;
        // console.log(payload)
        let res = await postSubmitQuiz(payload)
        console.log(`check res payload`, res)
        if (res && res.EC === 0) {
            setDataResult({
                countCorrect: res.DT.countCorrect,
                countTotal: res.DT.countTotal,
                quizData: res.DT.quizData
            })
            setIsShowResult(true)
        }
        else {
            alert("Wrong finish ")
        }
    }
    return (

        < div className='detail-quiz-container' >
            <div className='left-content'>

                <div className='title'>{location.state.quizzDes}</div>
                <hr />
                <div className='quest-content'>
                    <Question handleCheckBox={handleCheckBox} index={index} data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} />

                </div>

                <div className='footer'>
                    {index > 0 ? <button onClick={() => setIndex(index - 1)} className='btn btn-primary'>Back</button>
                        : ""}
                    {dataQuiz.length > index + 1 ? <button onClick={() => setIndex(index + 1)} className='btn btn-secondary'>Next</button>
                        : ""
                    }



                </div>
            </div>
            <div className='right-content'>

                <button onClick={() => handleFinishQuizz()} className='btn btn-warning'>finnish</button>
            </div>
            <ModalResult isShowResult={isShowResult} setIsShowResult={setIsShowResult} dataResult={dataResult} />
        </ div>
    );
}

export default ListQuizDetail;