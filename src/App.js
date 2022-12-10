import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import MainCRUD from "./mainCRUD/MainCRUD";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1> helllo</h1>
      </header>
      <nav>
        <NavLink to="/"> login</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/mainCRUD">mainCRUD</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainCRUD" element={<MainCRUD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
