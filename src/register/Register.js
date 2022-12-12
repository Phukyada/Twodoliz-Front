import React, { useState} from "react";
import "./register.css"


  const Register = () => {


  return (
    <div className="register">
      
      <div className="header">
        <img src="https://i.im.ge/2022/12/12/dipNnW.logo2dliz.png" />
      </div>
      
      <div className = "username">
        <ul> Username </ul>
        <input type="" className="userInput"/>
      </div>
      
      <div className = "email">
        <ul> E-mail </ul>
        <input type="" className="emailInput"/>
      </div> 

      <div className = "password">
        <ul> Password </ul>
        <input type="password" className="passwordInput"/>
      </div>      
      

     <button class="signup"><a href="/" >Create Account</a></button>


     <div className="loginbt">
      Already have an account?
      <button class="logbut"><a href="/login"> Login</a></button>
     </div>
    
    </div>
  )
}

export default Register;
  