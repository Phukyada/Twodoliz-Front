import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";

function CompleteTask() {
  const [complete, setComplete] = useState([]);

  const getCompleteTodo = () => {
    const url = "http://localhost:8000/tasks";
    axios
      .get(url)
      .then((response) => {
        const { status, message, data } = response;
        if (status != 200) {
          console.log("error");
        } else {
          setComplete(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompleteTodo();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgBlue">
        <div className="textTODO">
          <p> Completed Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;
