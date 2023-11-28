import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import './Login.css'
const Input = styled.input` 
  padding: 1em;
  margin: 0.5em;
  background: rgb(234, 243, 251);
  border: none;
  border-radius: 50px;
  width: 300px;
  font-size: 19px;
  font-family: 'Jua', sans-serif;
`;
 
const ErrorMsg = styled.div`
  color: red;
  margin-top: 10px;
  font-family: 'Jua', sans-serif;
`;

const Login = () => {
  const navigate = useNavigate();  

  const [error, setError] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('api/user-information/admin-login', {
        id: inputId,
        password: inputPassword,
      }); 
      if (response.data) {
        setLoggedIn(true);
        navigate('/');
      } else {
        setError('ID 또는 패스워드가 잘못되었습니다. 다시 입력해 주세요.');
      } 
    } 
     catch (error) {
      console.error('Error during login:', error);
      setError('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {loggedIn ? (
        <p>로그인되었습니다.</p>
      ) : (

        <div> 
          <Input
            type="text"
            placeholder="아이디를 입력하세요..."
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />

          <br />

          <Input
            type="password"
            placeholder="비밀번호를 입력하세요..."
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <br />
          <button className="login1-button" onClick={handleLogin}>로그인</button>
        </div>


      )}
    </div>
  );
};

export default Login;