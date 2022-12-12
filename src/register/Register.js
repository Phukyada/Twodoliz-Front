import React, { useState } from "react";
import { Form, message } from "antd";
import "./register.css"
import axios from "axios";

const Register = () => {
  const [form] = Form.useForm();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onFinish = async (e) => {
    console.log(e);
    const data = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    console.log(data);
    await axios
      .post("http://localhost:8000/auth/register", data)
      .then((response) => {
        console.log(response.data);
        message.success(`Create User successfully`)
      });
  };

  return (
    <div className="register">
      <div className="justify-content-end">
        <div className="header">
          <img src="https://i.im.ge/2022/12/12/dipNnW.logo2dliz.png" className="logo" />
        </div>
        <Form
          form={form}
          onFinish={onFinish}
        >
          <div className="input">
            <div className="al">
              <ul> Username </ul>
            </div>
            <Form.Item
              name="name"
              value={userData.name}
            >
              <input name="name" type="text" className="boxInput" onChange={handleChange} autoComplete="false" />
            </Form.Item>
            <div className="al">
              <ul> E-mail </ul>
            </div>
            <Form.Item
              name="email"
              value={userData.email}
            >
              <input name="email" type="email" className="boxInput" onChange={handleChange} autoComplete="false" />
            </Form.Item>
            <div className="al">
              <ul> Password </ul>
            </div>
            <Form.Item
              name="password"
              value={userData.password}
            >
              <input name="password" type="password" className="boxInput" onChange={handleChange} autoComplete="false" />
            </Form.Item>
          </div>

          <button class="signup" type="submit" onClick={onFinish}>Create Account</button>


          <div className="login">
            Already have an account?
            <button class="logbut"><a href="/"> Log in</a></button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register;
