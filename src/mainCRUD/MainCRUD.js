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

      <div>
        
          <div className="textTODO">
            <h1> My to-do list</h1>
          </div>

          <Link to="/"> Back to login </Link>
        

      <header>
        <Header />
      </header>

      <div className="textTODO">
        <h1> My to-do list</h1>

      </div>
    </div>
  );
}

export default MainCRUD;
