import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types';

//reducer=(previousState, action) => nextState 두개를 조합해서 다음state를 만들어주는 단계
//현재 state는 비어있는 상태
export default function (state = {}, action) {
    //type이 많아지고, 조치가 다 다르기 때문에
    switch (action.type) {
        //user_action.js에 적었던 타입 그대로
        //_actions 폴더에 types.js 만들어, 타입들만 따로 관리 -> import로 가져오는 형식으로 씀
        case LOGIN_USER:
            //previousState, action 다 있으니, 다음 state로 
            //...state -> spread operator, parameter에 있는 state를 똑같이 가져옴
            //user_action.js에 있는 payload(백엔드, 서버에서 가져온 값 = server index에 로그인 성공시 json값)를 loginSuccess에 넣어줌 
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        default:
            return state;
    }
}