import React, { useState } from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

function Auth({getAuth}:{getAuth():void}) {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className='container'>
            <div className='formContainer'>
            {isLogin ? <LoginForm getAuth={getAuth} setIsLogin={setIsLogin}/> :<RegisterForm getAuth={getAuth} setIsLogin={setIsLogin}/>}
            
            </div>
        </div>
    );
}

export default Auth;