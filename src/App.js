import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import Register from "./register/Register";
import MainCRUD from "./mainCRUD/MainCRUD";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<MainCRUD />}>
           <Route path="createTask" element={<p>createTaskRoute</p>} />
        </Route>
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
