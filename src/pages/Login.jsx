import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {LogContext} from "../context";

const Login = () => {

    const {isLogged, setIsLogged} = useContext(LogContext);

    const login = event => {
        event.preventDefault();
        setIsLogged(true);
        localStorage.setItem('isLogged', 'true');
    }

    return (
        <div className='login__container'>
            <h1 className='login__header'>Sign in</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="password" placeholder='Password'/>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    );
};

export default Login;