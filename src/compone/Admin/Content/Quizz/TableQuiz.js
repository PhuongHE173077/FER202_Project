import React from 'react';
import { Table } from 'react-bootstrap';

function TableQuiz(props) {
    const { listQuiz } = props;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Difficulty</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listQuiz.map((quiz, index) => (
                    <tr key={`quiz-${index}`}>
                        <td>{quiz.id}</td>
                        <td>{quiz.name}</td>
                        <td>{quiz.description}</td>
                        <td>{quiz.difficulty}</td>
                        <td>
                            <button className='btn btn-primary me-2'>Update</button>
                            <button className='btn btn-danger'>Delete</button>

                        </td>
                    </tr>
                ))

                }

            </tbody>
        </Table>
    );
}

export default TableQuiz;