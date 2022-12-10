import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";

function CompleteTask() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgGray">
        <div className="textTODO">
          <p> Completed Tasks</p>
        </div>
      </div>
    </div>
  );
}


export default CompleteTask;
