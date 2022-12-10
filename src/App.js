import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import Register from "./register/Register";
import MainCRUD from "./mainCRUD/MainCRUD";
import CreateTask from "./mainCRUD/createTask";
import CompleteTask from "./mainCRUD/completeTask";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<MainCRUD />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/completeTask" element={<CompleteTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
