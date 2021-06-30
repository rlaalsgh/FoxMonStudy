import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import "./Register.css";
import axios from 'axios';


function Register() {

  const [signUpCheck, setSignUpCheck] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState(false);
  const [name, setName] = useState('');

  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (password !== passwordError) {
      return setPasswordConfirm(true);
    }
    // console.log({
    //   email,
    //   password,
    //   passwordconfirm,
    //   name,
    // });

    userPost();
  };


  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePasswordConfirm = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordConfirm(e.target.value);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    userPost();
  }

  const userPost = () => {
    const postUser = async () => {
      try {

        await axios.post(
          '/', {
          name: email,
          password: password
        }
        );

        console.log("Success");
        //history.pushState('/');
        setSignUpCheck(true);
      } catch (e) {
        console.log(e);
      }
    }

    postUser(

    );
  }

  return (
    <div className="register_main_body">
      <div className="register_title">
        Sign Up
      </div>
      <div className="register_contents">
        <form className="signup_form" onSubmit={onSubmitHandler}>
          <div className = "signup_label">Email
          <input type="email" className="signup_label_input"  value={email} 
          onChange={onChangeEmail} placeholder ="E-mail"></input></div>

          <div className="signup_label">Password
          <input type="password" className="signup_label_input"
            value={password} onChange={onChangePassword}
            placeholder ="Password"></input></div>

          <div className="signup_label">PasswordCheck
          <input type="password" className="signup_label_input" 
            value={passwordconfirm} 
            onChange={onChangePasswordConfirm}
            placeholder = "PasswordCheck"></input></div>

          <div className="signup_label">Name
          <input type="text" className="signup_label_input" 
            value={name} onChange={onChangeName}></input></div>


          <button className="register_submit_button" type="submit" onClick={onSubmit}>Sign Up</button>
          {signUpCheck && (<Redirect to="/Login"></Redirect>)}

        </form>
      </div>
    </div>
  );
}

export default Register;