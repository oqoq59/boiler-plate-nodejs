import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { combineReducers } from 'redux';


function RegisterPage(props) {

    //dispatch 생성
    const dispatch = useDispatch();
    
    //return안 값을 바꾸려면 state를 통해서(react hook)
    //useState(initialState)는 react library에서 가져옴, (빈칸은 처음에 어떤 값인지)
    //서버에 보내야하는 값들을 state가 가지고 있음
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    
    //타이핑할때 onChange 이벤트 발생 -> value 바꿔주기
    const onEmailHandler = (event) => {
        //state 값 바꿔주기
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    //form 태그에도 onSubmit 이벤트를 줘야지 로그인 버튼이 작동.
    const onSubmitHandler = (event) => {
        
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인란은 동일해야 합니다.')
        }
        //같지 않으면 밑으로 진입할 수 없음
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login')
                } else {
                    alert("Failed to sigh up")
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
                <label>Name</label>
                <input type='text' value={Name} onChange={onNameHandler}/>
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <label>Confirm Password</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
