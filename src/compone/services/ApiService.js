import axios from "../utils/axiosCustomize.js";

const postCreateNewUser = (email, password, userName, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('username', userName);
    data.append('password', password);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data);

}
const PutUpdateUser = (id, userName, role, image) => {
    const data = new FormData();
    data.append('id', id)
    data.append('username', userName);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data);

}
const getAllUsers = () => {
    return axios.get('http://localhost:8081/api/v1/participant/all');
}
const deleteUsers = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}
const postLogin = (email, password) => {
    return axios.post('http://localhost:8081/api/v1/login', {
        email: email,
        password: password
    })
}
const getQuizData = () => {
    return axios.get('api/v1/quiz-by-participant')
}
const getQuestionByQuizId = (quizID) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${quizID}`)
}
const postSubmitQuiz = (data) => {
    return axios.post(`api/v1/quiz-submit`, { ...data })
}
export { postCreateNewUser, getAllUsers, PutUpdateUser, deleteUsers, postLogin, getQuizData, getQuestionByQuizId, postSubmitQuiz }