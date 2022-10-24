import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {


  


    const navigate = useNavigate();
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);
    const loginChange = useCallback((event: any)=>{
    setLogin(event.target.value)}, [])

    const pwdChange = useCallback((event: any)=>{
    setPassword(event.target.value)}, [])

    


    const auth = useCallback((event: any) => {
    const authString = "http://localhost:3001/auth";
       
    axios
      .post(
        authString,
        {
          auth: {
            login: login,
            password: password,
          },
        },
        {}
      )
      .then((res) => {
        localStorage.setItem(`token`, res.data.token)
        console.log(res.data.token);
        
      })
      .then(() => {
        console.log(`reload`);
        navigate("/"); 
        
      });
  }, [login, password, navigate])


  return (
    <div className='App'>
    <div className='logindialog'>
    <span id="routeA">Route A</span>
    <Form>
      <Form.Group className="mb-3 #route3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="user" placeholder="Enter user name" onChange={loginChange} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 tour-step4" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={pwdChange} />
      </Form.Group>
      
      
      <Button variant="primary" onClick={auth} >
        Login
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;