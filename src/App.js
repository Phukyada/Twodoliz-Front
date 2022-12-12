import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import Register from "./register/Register";
import MainCRUD from "./mainCRUD/MainCRUD";
import CreateTask from "./mainCRUD/createTask";
import CompleteTask from "./mainCRUD/completeTask";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function App() {

  const [loggedIn, setLoggedIn] = useState(null);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/home" /> : <Login logindata={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={loggedIn ? <MainCRUD logoutdata={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/createTask" element={loggedIn ? <CreateTask /> : <Navigate to="/" />} />
        <Route path="/completeTask" element={loggedIn ? <CompleteTask /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
