import axios from 'axios';
import {
    LOGIN_USER
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