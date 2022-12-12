import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Form, message } from 'antd';
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './login.css';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import Register from "./register/Register";
// import MainCRUD from "./mainCRUD/MainCRUD";


function Login({ logindata }) {
  const [form] = Form.useForm();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  let navigate = useNavigate();

  const onFinish = async (e) => {
    console.log(e);
    const data = {
      email: e.email,
      password: e.password,
    };
    console.log(data);
    await axios
      .post("http://localhost:8000/auth/login", data)
      //if cant post
      .catch((err) => {
        console.log(err);
        message.error(`Login failed`)
      })
      //if can post
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          // window.location.href = "/home";
          message.success(`Login success`)
          logindata();
          navigate("/home");
        }
      });
  };

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
      >
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
              <ul> E-mail </ul>
              <Form.Item
                name="email"
                value={userData.email}
              >
                <input
                  name="email"
                  value={userData.email}
                  type="email"
                  className="userinput"
                  onChange={handleChange}
                  autoComplete="false" />
              </Form.Item>
            </div>

            <div className="password">
              <ul> Password </ul>
              <Form.Item
                name="password"
                value={userData.password}
              >
                <input
                  name="password"
                  value={userData.password}
                  type="password"
                  className="passwordinput"
                  onChange={handleChange}
                  autoComplete="false" />
              </Form.Item>
            </div>

            <div className="login-bt">
              <button class="button1" onFinish={onFinish}> Log in </button>
            </div>

            <div className="signup-bt">
              Don't have an account yet?
              <button class="button2"><a href="/register"> Sign up now! </a></button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  )

}
export default Login;
