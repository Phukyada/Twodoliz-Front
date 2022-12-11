import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Input, DatePicker, Radio } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./MainCRUD.css";
import axios from "axios";

function MainCRUD() {
  const [toDo, setTodo] = useState([]);

  const getAllTodo = () => {
    const url = "http://localhost:8000/tasks";
    axios
      .get(url)
      .then((response) => {
        const { status, message, data } = response;
        if (status != 200) {
          console.log("error");
        } else {
          setTodo(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgGray">
        <div className="textTODO">
          <p> My to-do list</p>
          {toDo.map((task, index) => (
            <div key={index}>
              <h1>{task.title}</h1>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainCRUD;
