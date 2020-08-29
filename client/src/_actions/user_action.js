import axios from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types';


//loginPage.js에 있는 dispatch안 이름과 같도록, body안 내용-> dataToSubmit으로 받음 
export function loginUser(dataToSubmit) {

    //서버에서 받은 값(response.data)을 request에다 저장
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

        //return 시켜 request를 reducer로 보냄, reducer=(previousState, action) => nextState 두개를 조합해서 다음state를 만들어주는 단계
        //action에는 type과 response를 넘겨줌
    return {
        type: "LOGIN_USER",
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

        //return 시켜 request를 reducer로 보냄, reducer=(previousState, action) => nextState 두개를 조합해서 다음state를 만들어주는 단계
        //action에는 type과 response를 넘겨줌
    return {
        type: "REGISTER_USER",
        payload: request
    }
}

export function auth() {
    //get method니까 body 부분은 필요없음
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: "AUTH_USER",
        payload: request
    }
}