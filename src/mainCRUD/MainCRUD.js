import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/hearder.js";

import "./MainCRUD.css";


function MainCRUD() {
  return (
    <div>
      <div>
        <Header />
      </div>
     
      <div className="bgGray">
        <div className="textTODO">
          <h1> My to-do list</h1>
        </div>

        <Link to="/"> Back to login </Link>

        
      </div>
    </div>
  );
}

export default MainCRUD;
