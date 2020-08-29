import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    //option 종류
    //null => 아무나 출입 가능 페이지
    //true => 로그인된 유저만 출입 가능 페이지
    //false => 로그인 안된 유저만 

    //adminRoute
    //null => 기본값
    //true => admin 계정만 출입 가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {
            //페이지 이동할때마다 dispatch 발동, 서버에 계속request를 줌
            dispatch(auth()).then(response => {
                console.log(response)
                
                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if (option) {
                        alert('Please sign in first')
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        alert('only for admin account')
                        props.history.push('/')
                    }else {
                        if(option === false) {
                            alert('already signed in, only for guest')
                            props.history.push('/')
                        }
                    }
                }
            })
        }
        , [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}