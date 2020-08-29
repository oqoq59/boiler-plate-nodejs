// import React from 'react';
import React, {useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'; 
//import { response } from 'express';

function LandingPage(props) {
    
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response))
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                //console.log(response.data)
                if (response.data.success) {
                    //withRouter를 써줘야 가능
                    props.history.push('/login')
                } else {
                    alert('Sorry, failed to log out !')
                }
            })
    }
    
    return (
        <div style={{
            display: 'flex', justifyContent:'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <h2>START PAGE</h2>
            <br/>
            <button onClick={onClickHandler}>
                Log Out
            </button>
        </div>
    )
}

export default withRouter(LandingPage)