import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getQuestionByQuizId } from '../services/ApiService';
import _ from 'lodash';
import '../../scss/QuizDetail.scss'
import Question from './Question';

function ListQuizDetail(props) {
    const param = useParams();
    const quizId = param.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestion();
    }, [quizId])
    const fetchQuestion = async () => {
        let res = await getQuestionByQuizId(quizId);
        console.log('checck res', res);
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
    console.log('check data quiz', dataQuiz)
    const handleCheckBox = (aId, qId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);


    }
    return (

        < div className='detail-quiz-container' >
            <div className='left-content'>

                <div className='title'>{location.state.quizzDes}</div>
                <hr />
                <div className='quest-content'>
                    <Question index={index} data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} />

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

                right content
            </div>


        </ div>
    );
}

export default ListQuizDetail;