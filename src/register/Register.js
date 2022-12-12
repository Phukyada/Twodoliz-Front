import React, { useState } from "react";
import "./register.css"


const Register = () => {


  return (
    <div className="register">
      <div className="justify-content-end">
        <div className="header">
          <img src="https://i.im.ge/2022/12/12/dipNnW.logo2dliz.png" className="logo" />
        </div>
        <div className="input">
          <div className="al">
            <ul> Username </ul>
          </div>
          <input type="" className="boxInput" />

          <div className="al">
            <ul> E-mail </ul>
          </div>
          <input type="" className="boxInput" />

          <div className="al">
            <ul> Password </ul>
          </div>
          <input type="password" className="boxInput" />
        </div>

        <button class="signup"><a href="/" >Create Account</a></button>

        <div className="login">
          Already have an account?
          <button class="logbut"><a href="/"> Login</a></button>
        </div>
      </div>
    </div>
  )
}

export default Register;
