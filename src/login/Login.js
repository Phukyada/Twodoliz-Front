import React from "react";
import { Col, Row } from 'antd';
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Login.css';
// import Register from "./register/Register";
// import MainCRUD from "./mainCRUD/MainCRUD";


function Login() {
  return (
    <>
      <Row>
        <Col span={12} className="col-1">
          <div>
            <div className="logo">
              <ul> Two Du Liz </ul>
              {/* <img src="" /> */}
            </div>
          </div>
        </Col>
        <Col span={12} className="col-2">
          <div className="username">
            <ul> Username </ul>
            <input type="" />
          </div>

          <div className="password">
            <ul> Password </ul>
            <input type="password" />
          </div>

          <div className="login-bt">
            <button><a href="/"> Log in </a></button>
          </div>

          <div className="signup-bt">
            <div>Don't have an account yet? </div>
            <button><a href="/register"> Sign up now! </a></button>
          </div>
        </Col>
      </Row>

    </>
  )

}













export default Login;
