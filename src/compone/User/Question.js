import React from 'react';

function Question(props) {
    const { index, data, handleCheckBox } = props;
    const handleChecked = (e, aId) => {
        // console.log(aId, data.questionID)
        handleCheckBox(aId, data.questionID)
    }
    return (
        <>
            <div className='q-image'>
                {data.image ? <img src={`data:image/png;base64,${data.image}`} /> : <div className='img-2'></div>}
            </div>
            <div className='question'>
                <h5>Question {index + 1}: {data.description}</h5>
            </div>
            <div className='answer'>
                {data.answers && data.answers.length &&
                    data.answers.map((answer, index) => (

                        <div className="form-check" key={`answer-${index}`}>
                            <input className="form-check-input" checked={answer.isSelected}
                                onChange={(e) => handleChecked(e, `${answer.id}`)} type="checkbox" value="" />
                            <label className="form-check-label" >
                                {answer.description}
                            </label>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Question;