import { USER_LOGIN_SUCCESS } from "./types"

export const doLogin = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data
    }
}