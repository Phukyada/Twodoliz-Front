import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Login.css';
// import Register from "./register/Register";
// import MainCRUD from "./mainCRUD/MainCRUD";


function Login() {
  return (
    <>
      <div>
        <div class="row">
          <div class="column"
            style={{
              backgroundColor: 'green',
            }}
          >
            <div className="logo">
              <ul> Two Du Liz </ul>
              {/* <img src="" /> */}
            </div>
          </div>
          <div class="column"
            style={{
              backgroundColor: 'blue',
            }}
          >
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
          </div>





        </div>
      </div>
    </>
  )

}













export default Login;
