import React, {useState} from 'react';
//import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
//import { response } from 'express';


//props 페이지 이동 위해서
function LoginPage(props) {
    //dispatch 생성
    const dispatch = useDispatch();
    
    //return안 값을 바꾸려면 state를 통해서(react hook)
    //useState(initialState)는 react library에서 가져옴, (빈칸은 처음에 어떤 값인지)
    //서버에 보내야하는 값들을 state가 가지고 있음
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    //타이핑할때 onChange 이벤트 발생 -> value 바꿔주기
    const onEmailHandler = (event) => {
        //state 값 바꿔주기
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    //form 태그에도 onSubmit 이벤트를 줘야지 로그인 버튼이 작동.
    const onSubmitHandler = (event) => {
        //안해줬을때 login button 누를때마다 페이지 refresh, refresh가 되면 다음 코드를 실행이 되지 않음.
        event.preventDefault();

        /* console.log('Email', Email)
        console.log('Password', Password) */

        let body = {
            email: Email,
            password: Password
        }
        //Redux 미사용
        //state값들을 Axios로 서버에 보냄
        //server/index.js에 있는 app.post('/api/users/login', (req, res) 똑같은 주소로 보냄.
        /* Axios.post('/pi/user/login', body)
        .then(response => {처리할 내용}) */

        //Redux사용
        //dispatch이용해  Action 취함, loginUser라는 액션 생성 (user_action.js에  function 만둘어줘야함)
        dispatch(loginUser(body))
            //로그인 성공시 메인페이지로 이동
            .then(response => {
                if(response.payload.loginSuccess) {
                    //페이지 이동시 props.history.push()사용
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
        
    }

    return (
        <div style={{
            display: 'flex', justifyContent:'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage