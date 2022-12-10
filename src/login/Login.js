import React from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
  let navigate = useNavigate();

  return (
    <div>
      <p>this is login</p>
      <button onClick={() => navigate('/home')}>
        main crud
      </button>
    </div>
  );
  
}

export default Login;
