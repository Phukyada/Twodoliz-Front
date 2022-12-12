import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import MainCRUD from "./mainCRUD/MainCRUD";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainCRUD" element={<MainCRUD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
