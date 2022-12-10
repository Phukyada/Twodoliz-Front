import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";

function CreateTask() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div style={{ backgroundColor: "#D9D9D9", height: "100%" }}>
        <div className="textTODO">
          <h1> My to-do list</h1>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default CreateTask;
