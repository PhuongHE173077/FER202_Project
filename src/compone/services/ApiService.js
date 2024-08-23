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
export { postCreateNewUser, getAllUsers, PutUpdateUser }