import React,  {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({click}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [token, setToken] = useState('');
    const [redirectFlag, setRedirectFlag] = useState(false);
    useEffect(() => {
        const postUser = () => {
            try {
                axios.post(
                    '/', {
                        name : name,
                        email : email,
                        password : password
                    }
                ).then((response) => {
                    const { accessToken } = response.data;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    // console.log(response.data);
                    setToken(response.data);
                    localStorage.setItem("email", email);
                    // setLoginFlag(response.data.loginFlag);
                });
            } catch(err) {
                console.log(err);
            }
        }
        // postUser();
    });

    const onSubmitHandler = (e) => {

        e.preventDefault();

        if(token) {

            console.log("Login Successful");
            alert("Login Successful !!!");
            click = true;
            setRedirectFlag(true);
            window.location.reload();
            window.location.replace("/");
        } else {

            console.log("Login Failed");
            alert("Failed to login ( Please check again )");
            setEmail("");
            setPassword("");
        }
    };

    const onChangeEmail = (e) => {

        setName(e.target.value);
    }

    const onChangePassword = (e) => {

        setPassword(e.target.value);
    }

    return (
        <div className = "login_main">
            <div className = "login_body">
                <div className = "login_main_holder">
                    <div className = "login_title">
                        <h1 >Login</h1>
                    </div>

                    <form className = "signin_form" onSubmit = {onSubmitHandler}>
                        <div className = "signin_label">E-Mail
                        <input type = "text" value = {email} onChange = {onChangeEmail}
                            className = "signin_form_field" placeholder="E-Mail"></input></div>

                        <div className = "signin_label">Password
                        <input type = "password"  value = {password} onChange = {onChangePassword}
                            className = "signin_form_field" placeholder="Password"></input></div>

                        <button className = "signin_submit_button" type = "submit">Sign In</button>
                        {redirectFlag && (<Redirect to = "/"></Redirect>)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;