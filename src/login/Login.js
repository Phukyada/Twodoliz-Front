import React from "react";
import { Col, Row } from 'antd';
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './login.css';
// import Register from "./register/Register";
// import MainCRUD from "./mainCRUD/MainCRUD";


function Login() {
  return (
    <>
      <Row>
        <Col span={12} className="col-1">
          <div>
            <div className="logo">
              <img src="https://i.im.ge/2022/12/11/dqez5y.logoo.png" border="0" />
            </div>
          </div>
        </Col>
        <Col span={12} className="col-2">
          <div className="username">
            <ul> Username </ul>
            <input type="" className="userinput" />
          </div>

          <div className="password">
            <ul> Password </ul>
            <input type="password" className="passwordinput" />
          </div>

          <div className="login-bt">
            <button class="button1"><a href="/home"> Log in </a></button>
          </div>

          <div className="signup-bt">
            Don't have an account yet?
            <button class="button2"><a href="/register"> Sign up now! </a></button>
          </div>
        </Col>
      </Row>

    </>
  )

}
export default Login;
